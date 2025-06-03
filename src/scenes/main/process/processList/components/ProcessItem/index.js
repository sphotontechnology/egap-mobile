import React, { useCallback } from 'react';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import AppText from 'components/AppText';
import AppConfigs from 'components/index.js/configs/appConfigs';
import Image from 'components/Image';

function ProcessItem({ item, onPress }) {
  const { seed_name, image, num_period } = item || {};
  const END_POINT = AppConfigs.END_POINT;
  const _onPress = useCallback(() => {
    typeof onPress === 'function' && onPress(item);
  }, [onPress, item]);

  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      <Image source={{ uri: `${END_POINT}/` + image }} style={styles.image} />
      <View style={{ flexGrow: 1 }} />
      <AppText semi normal style={styles.nameTxt}>
        {seed_name}
      </AppText>
      <AppText
        normal
        style={styles.stageTxt}
      >{`${num_period} giai đoạn`}</AppText>
      <View style={{ flexGrow: 1 }} />
    </TouchableOpacity>
  );
}

export default React.memo(ProcessItem);
