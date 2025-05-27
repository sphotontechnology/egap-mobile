import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';

function WeatherContent() {
  return (
    <View style={styles.container}>
      <AppText fit>Not found</AppText>
    </View>
  );
}

export default React.memo(WeatherContent);
