
import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';

function TaskPickerItem() {
  return (
    <View style={styles.container}>
       <AppText large>TaskPickerItem</AppText>
    </View>
  );
}

export default React.memo(TaskPickerItem);
