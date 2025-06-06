import * as React from 'react';
import { useState } from 'react';
import {
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './AddTask.styles';
import AppText from 'components/AppText';
import AppHeader from 'components/AppHeader';
import { NAMESPACE } from './AddTask.constants';
import { getString } from 'utils/i18n';
import AppButton from 'components/AppButton';
import TextInputBox from 'components/TextInputBox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import { DEFAULT_PADDING_VERTICAL } from '../../../../constants/size';
import { scaleLandscape } from '../../../../utils/responsive';
import SelectionItem from '../../../../components/SelectionItem';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { IC_CAMERA, IC_UPLOAD, IMG_CLOSE } from '../../../../assets/path';
import { showAlertNotification } from '../../../../utils/alert';
import AppLoading from '../../../../components/AppLoading';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';

const FormData = require('form-data');

function AddTaskView({
  onPressBack,
  values,
  handleChange,
  handleSubmit,
  onPressNavigateFilter,
  setFieldValue,
}) {
  const [listImage, setListImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function uploadImage() {
    setFieldValue('image', '');

    if (listImage.length === 0) {
      handleSubmit();
    } else {
      const myHeaders = new Headers();

      const formdata = new FormData();
      for (let i = 0; i < listImage.length; i++) {
        formdata.append('files[]', listImage[i]);
      }

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow',
      };

      return fetch('https://egap.vn/uploadImg', requestOptions)
        .then((response) => response.json())
        .catch((error) => console.error('errror', error));
    }
  }

  const requestPermission = async () => {
    // console.log('You');
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cần cung cấp quyền cho ứng dụng',
          message: 'Ứng dụng cần cung cấp quyền truy cập vào máy ảnh',
          buttonNeutral: 'Hỏi lại sau',
          buttonNegative: 'Đóng',
          buttonPositive: 'Đồng ý',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cần cung cấp quyền cho ứng dụng',
          message: 'Ứng dụng cần cung cấp quyền thêm bộ nhớ',
          buttonNeutral: 'Hỏi lại sau',
          buttonNegative: 'Đóng',
          buttonPositive: 'Đồng ý',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      } else {
      }
    } catch (err) {
      console.warn(err);
    }
  };

  function convertStringToDate(dateString: string) {
    const [datePart, timePart] = dateString.split(' ');
    const [year, month, day] = datePart.split(':');
    const [hours, minutes, seconds] = timePart.split(':');
    return new Date(year, month - 1, day, hours, minutes, seconds);
  }

  return (
    <View style={styles.container}>
      <AppHeader
        title={getString(`${NAMESPACE}.title`)}
        onPressBack={onPressBack}
      />
      <KeyboardAwareScrollView style={styles.content}>
        <View
          style={{
            marginTop: DEFAULT_PADDING_VERTICAL,
            marginBottom: scaleLandscape(8),
            flexDirection: 'row',
          }}
        >
          <AppText semi bold style={styles.label}>
            Loại công việc
          </AppText>
          <AppText semi bold style={{ color: 'red' }}>
            *
          </AppText>
        </View>
        <SelectionItem
          onPress={onPressNavigateFilter}
          icon={'chevron-down'}
          iconType={'Feather'}
          selection={!!values.task.name}
          title={values.task.name ? values?.task?.name : 'Lựa chọn công việc'}
        />

        <View
          style={{
            marginTop: DEFAULT_PADDING_VERTICAL,
            marginBottom: scaleLandscape(8),
            flexDirection: 'row',
          }}
        >
          <AppText semi bold style={styles.label}>
            Mô tả công việc
          </AppText>
        </View>
        <View
          style={{
            height: scaleLandscape(100),
            width: '100%',
          }}
        >
          <TextInputBox
            containerStyle={styles.containerStyleTextInput}
            placeholder={'Nội dung công việc cần thực hiện'}
            value={values.description}
            onChangeText={handleChange('description')}
            textInputStyle={styles.textInputStyle}
            multiline={true}
          />
        </View>
        <View
          style={{
            marginTop: DEFAULT_PADDING_VERTICAL,
            marginBottom: scaleLandscape(8),
            flexDirection: 'row',
          }}
        >
          <AppText semi bold style={styles.label}>
            {'Hình ảnh công việc' + ` (${listImage?.length}/3)`}
          </AppText>
        </View>
        {listImage?.length ? (
          <ScrollView
            style={styles.listImage}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {listImage?.map((item, index) => {
              return (
                <View key={index} style={styles.imageContainer}>
                  <Image
                    resizeMode={'contain'}
                    source={{ uri: item?.uri }}
                    style={styles.image}
                  />
                  <TouchableOpacity
                    style={styles.iconRemoveContainer}
                    onPress={() => {
                      const newListImage = [...listImage];
                      newListImage.splice(index, 1);
                      setListImage(newListImage);
                    }}
                  >
                    <Image style={styles.iconRemove} source={IMG_CLOSE} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
        ) : null}
        <View style={styles.containerButtonAdd}>
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={() => {
              if (listImage?.length < 3) {
                Platform.OS === 'android' && requestPermission();
                launchCamera(
                  {
                    mediaType: 'photo',
                    includeBase64: false,
                    includeExtra: true,
                    maxHeight: 1500,
                    maxWidth: 2000,
                    quality: 0.5,
                  },
                  (res) => {
                    if (res?.assets) {
                      if (
                        res?.assets[0]?.uri !== null &&
                        res?.assets[0]?.uri !== undefined
                      ) {
                        setListImage([
                          ...listImage,
                          {
                            uri: res?.assets[0]?.uri,
                            type: 'image/jpeg',
                            name: res?.assets[0]?.fileName,
                          },
                        ]);
                      }
                    }
                  }
                ).then();
              } else {
                showAlertNotification({
                  message: 'Bạn chỉ được chọn tối đa 3 ảnh',
                });
              }
            }}
          >
            <Image
              // source={require('../../../assets/images/logoNew.png')}
              source={IC_CAMERA}
              style={styles.iconImg}
            />
            <AppText style={styles.textButtonAdd}>Chụp ảnh mới</AppText>
          </TouchableOpacity>
        </View>
        {/* {response && <AppText>{JSON.stringify(response)}</AppText>} */}

        <AppButton
          disabled={!values?.task?.name}
          title={'Hoàn thành công việc'}
          style={styles.button}
          onPress={async () => {
            try {
              setIsLoading(true);
              const res = await uploadImage();
              console.log('123', JSON.stringify(res));
              if (res.links) {
                setFieldValue('image', JSON.stringify(res.links));
                setListImage([]);
                handleSubmit();
              }
            } catch (err) {
              console.warn(err);
            } finally {
              setIsLoading(false);
            }
          }}
        />
      </KeyboardAwareScrollView>
      {isLoading && <AppLoading />}
    </View>
  );
}

export default React.memo(AddTaskView);
