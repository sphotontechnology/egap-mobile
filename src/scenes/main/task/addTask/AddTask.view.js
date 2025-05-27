import * as React from 'react';
import { useState } from 'react';
import { Image, PermissionsAndroid, Platform, ScrollView, TouchableOpacity, View } from 'react-native';
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
import { launchCamera } from 'react-native-image-picker';
import { IC_CAMERA, IC_UPLOAD, IMG_CLOSE } from '../../../../assets/path';
import { showAlertNotification } from '../../../../utils/alert';
import AppLoading from '../../../../components/AppLoading';
import DeviceInfo from 'react-native-device-info'
import moment from "moment";

const axios = require('axios');
const FormData = require('form-data');

function AddTaskView({ onPressBack, values, handleChange, handleSubmit, onPressNavigateFilter, setFieldValue }) {
    const [listImage, setListImage] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const requestPermission = async () => {
        // console.log('You');
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {
                title: 'Cần cung cấp quyền cho ứng dụng',
                message: 'Ứng dụng cần cung cấp quyền truy cập vào máy ảnh',
                buttonNeutral: 'Hỏi lại sau',
                buttonNegative: 'Đóng',
                buttonPositive: 'Đồng ý',
            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            } else {
            }
        } catch (err) {
            console.warn(err);
        }
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, {
                title: 'Cần cung cấp quyền cho ứng dụng',
                message: 'Ứng dụng cần cung cấp quyền thêm bộ nhớ',
                buttonNeutral: 'Hỏi lại sau',
                buttonNegative: 'Đóng',
                buttonPositive: 'Đồng ý',
            });
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            } else {
            }
        } catch (err) {
            console.warn(err);
        }
    };

    async function uploadImage() {
        const data = new FormData();
        setIsLoading(true);
        setFieldValue('image', '');
        if (listImage.length === 0) {
            handleSubmit();
        } else {
            for (let i = 0; i < listImage.length; i++) {
                data.append('files[]', listImage[i]);
            }
            console.log('data', data)
            const config = {
                method: 'post', url: 'https://egap.vn//uploadImg', data: data,
            };
            axios(config)
                .then(function (response) {
                    setFieldValue('image', JSON.stringify(response.data.links));
                    setListImage([]);
                })
                .catch(function (error) {
                    console.log(error);
                }).finally(() => {
                    setIsLoading(false);
                    handleSubmit();
                });
        }

    }

    function convertStringToDate(dateString: string) {
        const [datePart, timePart] = dateString.split(' ');
        const [year, month, day] = datePart.split(':');
        const [hours, minutes, seconds] = timePart.split(':');
        return new Date(year, month - 1, day, hours, minutes, seconds);
    }

    return (<View style={styles.container}>
        <AppHeader
            title={getString(`${NAMESPACE}.title`)}
            onPressBack={onPressBack}
        />
        <KeyboardAwareScrollView style={styles.content}>
            <View style={{
                marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(8), flexDirection: 'row',
            }}>
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

            <View style={{
                marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(8), flexDirection: 'row',
            }}>
                <AppText semi bold style={styles.label}>
                    Mô tả công việc
                </AppText>
            </View>
            <View
                style={{
                    height: scaleLandscape(100), width: '100%',
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
            <View style={{
                marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(8), flexDirection: 'row',
            }}>
                <AppText semi bold style={styles.label}>
                    {'Hình ảnh công việc' + ` (${listImage?.length}/3)`}
                </AppText>
            </View>
            {listImage?.length ? <ScrollView
                style={styles.listImage}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {listImage?.map((item, index) => {
                    return <View key={index} style={styles.imageContainer}>
                        <Image resizeMode={'contain'} source={{ uri: item?.uri }} style={styles.image} />
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
                    </View>;
                })}
            </ScrollView> : null}
            <View style={styles.containerButtonAdd}>
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={() => {
                        if (listImage?.length < 3) {
                            Platform.OS === 'android' && requestPermission();
                            launchCamera({
                                mediaType: 'photo',
                                includeBase64: false,
                                includeExtra: true,
                                maxHeight: 1500,
                                maxWidth: 2000,
                            }, (res) => {
                                if (res?.assets) {
                                    if (res?.assets[0]?.uri !== null && res?.assets[0]?.uri !== undefined) {
                                        setListImage([...listImage, {
                                            uri: res?.assets[0]?.uri,
                                            type: 'image/jpeg',
                                            name: res?.assets[0]?.fileName,
                                        }]);
                                    }
                                }
                            }).then();
                        } else {
                            showAlertNotification({
                                message: 'Bạn chỉ được chọn tối đa 3 ảnh',
                            });
                        }
                    }}>
                    <Image
                        // source={require('../../../assets/images/logoNew.png')}
                        source={IC_CAMERA}
                        style={styles.iconImg}
                    />
                    <AppText style={styles.textButtonAdd}>Chụp ảnh mới</AppText>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonAdd}
                    onPress={async () => {
                        setIsLoading(true);
                        const result = await ImagePicker.launchImageLibraryAsync({
                            mediaTypes: ImagePicker.MediaTypeOptions.Images,
                            exif: true,
                            quality: 0.8,
                        });
                        console.log(JSON.stringify(result.assets[0], null, 2));
                        if (result.assets) {
                            if (Platform.OS === "android") {
                                const device = DeviceInfo.getModel();
                                if (device !== result.assets[0].exif.Model) {
                                    showAlertNotification({
                                        message: 'Ảnh không đúng thiết bị. Vui lòng chọn ảnh khác',
                                    });
                                    setIsLoading(false)
                                } else {
                                    console.log('result', result.assets[0].exif.DateTimeOriginal)
                                    const date = convertStringToDate(result.assets[0].exif.DateTimeOriginal);
                                    console.log('date', date)
                                    if (moment(date).format("YYYY/MM/DD") < moment().format("YYYY/MM/DD")) {
                                        showAlertNotification({
                                            message: 'Ảnh đã quá hạn sử dụng. Vui lòng chọn ảnh khác',
                                        });
                                        setIsLoading(false)
                                    } else {
                                        setListImage([...listImage, {
                                            uri: result?.assets[0]?.uri,
                                            type: 'image/jpeg',
                                            name: result?.assets[0]?.uri.split('/').pop(),
                                        }]);
                                        setIsLoading(false)
                                    }
                                }
                            } else {
                                if (result.assets[0].exif.LensModel === undefined) {
                                    showAlertNotification({
                                        message: 'Ảnh không đúng thiết bị. Vui lòng chọn ảnh khác',
                                    });
                                    setIsLoading(false)
                                } else {
                                    console.log('result', result.assets[0].exif.DateTimeOriginal)
                                    const date = convertStringToDate(result.assets[0].exif.DateTimeOriginal);
                                    console.log('date', date)
                                    if (moment(date).format("YYYY/MM/DD") < moment().format("YYYY/MM/DD")) {
                                        showAlertNotification({
                                            message: 'Ảnh đã quá hạn sử dụng. Vui lòng chọn ảnh khác',
                                        });
                                        setIsLoading(false)
                                    } else {
                                        setListImage([...listImage, {
                                            uri: result?.assets[0]?.uri,
                                            type: 'image/jpeg',
                                            name: result?.assets[0]?.fileName,
                                        }]);
                                        setIsLoading(false)
                                    }
                                }
                            }

                        }
                    }}>
                    <Image
                        // source={require('../../../assets/images/logoNew.png')}
                        source={IC_UPLOAD}
                        style={styles.iconImg}
                    />
                    <AppText style={styles.textButtonAdd}>Chọn ảnh có sẵn</AppText>
                </TouchableOpacity>
            </View>
            {/* {response && <AppText>{JSON.stringify(response)}</AppText>} */}

            <AppButton
                disabled={!values?.task?.name}
                title={'Hoàn thành công việc'}
                style={styles.button}
                onPress={async () => {
                    await uploadImage();
                }}
            />
        </KeyboardAwareScrollView>
        {isLoading && <AppLoading />}
    </View>);
}


export default React.memo(AddTaskView);
