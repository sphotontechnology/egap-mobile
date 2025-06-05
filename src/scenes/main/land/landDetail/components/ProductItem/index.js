import React, { useMemo, useCallback } from 'react';
import styles from './styles';
import { TouchableOpacity, View } from 'react-native';
import AppText from 'components/AppText';
import { PRODUCT_STATUS } from 'constants/appConstants';
import Image from '../../../../../../components/Image';
import { IMG_APPLE, IMG_PRODUCT } from '../../../../../../assets/path';
import moment from "moment";

function ProductItem({ item, onPress, landInfo }) {
  const { product_name, state, quantity, grow_day } = item || {};
  const renderStatus = useMemo(() => {
    switch (state) {
      case PRODUCT_STATUS.SELLING:
        return `Đang bán (${quantity})`;
      case PRODUCT_STATUS.DONE:
        return `Đã bán (${quantity})`;
      case PRODUCT_STATUS.NEW:
        return 'Ngừng kinh doanh';
      default:
        break;
    }
  }, [state, quantity]);
  const _onPress = useCallback(() => {
    typeof onPress === 'function' && onPress(item);
  }, [item, onPress]);

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

  return (
    <TouchableOpacity style={[styles.container]} onPress={_onPress}>
      <Image source={IMG_PRODUCT} style={styles.image} />
      <AppText bold fit style={styles.nameText}>
        {` ${product_name} ${
          landInfo?.standard_name ? '- ' + landInfo?.standard_name : ''
        } (${
          grow_day
            ? moment(timeConverter(grow_day), 'D MMM YYYY HH:mm:ss').format(
                'DD/MM/YYYY'
              )
            : '--/--/----'
        })`}
      </AppText>
    </TouchableOpacity>
  );
}

export default React.memo(ProductItem);
