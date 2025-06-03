import React, { useCallback } from 'react';
import styles from './styles';
import { TouchableOpacity, Image, View } from 'react-native';
import AppText from 'components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NAMESPACE } from '../../LandList.constants';
import { getString } from 'utils/i18n';
import { scaleLandscape } from '../../../../../../utils/responsive';

function LandItem({ item, onPressPlus, onPressItem }) {
  const { area_name, oname, product } = item || {};

  const _onPressPlus = useCallback(() => {
    typeof onPressPlus === 'function' && onPressPlus(item);
  }, [item, onPressPlus]);

  const _onPressItem = useCallback(() => {
    typeof onPressItem === 'function' && onPressItem(item);
  }, [item, onPressItem]);

  return (
    <TouchableOpacity style={styles.container} onPress={_onPressItem}>
      <TouchableOpacity style={styles.plusIconTouch} onPress={_onPressPlus}>
        <Icon type={'FontAwesome5'} name={'plus'} style={styles.iconPlus} />
      </TouchableOpacity>
      <Image
        source={require('../../../../../../assets/images/vegetable.png')}
        style={styles.vegetableImg}
      />
      <AppText semi style={styles.titleText}>
        {area_name}
      </AppText>
      <AppText normal style={[styles.ownerText]}>{`${oname}`}</AppText>
      <AppText normal medium style={[styles.productText, { color: '#A0A0A0' }]}>
        {`${product.length}` + ' sản phẩm'}
      </AppText>
    </TouchableOpacity>
  );
}

export default React.memo(LandItem);
