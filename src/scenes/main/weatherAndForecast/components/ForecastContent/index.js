import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';

function ForecastContent() {
  return (
    <View style={styles.container}>
      <AppText fit>Hiện tại chưa có dữ liệu</AppText>
    </View>
  );
}

export default React.memo(ForecastContent);
