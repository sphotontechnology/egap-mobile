import React, { useState } from 'react';
import styles from './styles';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import AppText from 'components/AppText';
import moment from 'moment';
import { DATE_FORMAT } from 'constants/appConstants';
import AppConfigs from 'components/index.js/configs/appConfigs';
import ImageView from 'react-native-image-viewing';
import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from "axios";

function TaskItem({ item, index, getTaskListData, listTask }) {
  const { date, description, image, tkname, fullname, updated_time } =
    item || {};
  const [visible, setIsVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState('');
  const END_POINT = AppConfigs.END_POINT;
  let imageData = [];
  //todo nên sửa lại ở server để trả về image luôn là mảng
  if (
    image &&
    image !== '' &&
    image !== '[undefined]' &&
    image[0] !== 'f' &&
    image[0] !== 'h' &&
    image[0] !== 'i'
  ) {
    imageData = JSON.parse(image).map((item, index) => {
      return { uri: `${END_POINT}/` + item };
    });
  }
  console.log({ updated_time });

  function timeConverter(UNIX_timestamp) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    return date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
  }

  console.log({ imageData });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <View
            style={[
              {
                flexGrow: 1,
                width: 1,
              },
              {
                backgroundColor: index === 0 ? 'transparent' : '#D9DDE8',
              },
            ]}
          />
          <View style={styles.indexView}>
            <AppText fit style={styles.indexText}>{`${index + 1}`}</AppText>
          </View>

          <View
            style={[
              {
                flexGrow: 1,
                width: 1,
              },
              {
                backgroundColor:
                  index === listTask?.length - 1 ? 'transparent' : '#D9DDE8',
              },
            ]}
          />
        </View>

        <View style={styles.right}>
          <AppText bold fit style={{ color: 'rgba(12, 113, 49, 1)' }}>
            {tkname}
          </AppText>
          <AppText
            style={{
              color: "rgba(52, 51, 51, 1)",
              fontStyle: 'italic',
              paddingVertical: 4,
            }}
          >
            {`${
              date
                ? moment(date, 'MM/DD/YYYY').format('DD/MM/YYYY')
                : '--/--/----'
            } , ${
              updated_time
                ? moment(
                    timeConverter(updated_time),
                    'D MMM YYYY HH:mm:ss'
                  ).format('HH:mm')
                : '--:--'
            }`}
          </AppText>
          <AppText
            medium
            style={{ color: '#343333' }}
          >{`${description}`}</AppText>
          <ScrollView style={styles.imageContainer} horizontal>
            {imageData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setIsVisible(true);
                  setImageIndex(index);
                }}
              >
                <Image
                  source={item}
                  style={styles.imageProduct}
                  resizeMode={'cover'}
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <AppText style={{ color: 'rgba(160, 160, 160, 1)' }}>
            {' '}
            {`Ghi chép: ${fullname}`}
          </AppText>
          <TouchableOpacity
            style={styles.buttonDeleteTask}
            onPress={() => {
              Alert.alert('Xác nhận', 'Bạn chắc chắn muốn xóa nhiệm vụ này?', [
                {
                  text: 'Đồng ý',
                  onPress: () => {
                    // xoa id_task
                    var config = {
                      method: 'delete',
                      url: 'https://egap.vn//task/' + item.id_task,
                      headers: {
                        Cookie: 'ci_session=9b1uo53amd1k9ihcpm4m69kg8p',
                      },
                    };

                    axios(config)
                      .then(function (response) {
                        getTaskListData();
                        // onDelete();
                        // getTaskListData(productID);
                      })
                      .catch(function (error) {});
                  },
                },
                {
                  text: 'Hủy',
                  style: 'cancel',
                },
              ]);
            }}
          >
            <Text style={styles.deleteText}>Xóa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ImageView
        images={imageData}
        imageIndex={imageIndex}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
        FooterComponent={({ imageIndex }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '400' }}>
              {imageIndex + 1}
            </Text>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: '400' }}>
              /{imageData.length}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

export default React.memo(TaskItem);
