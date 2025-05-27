import React, {useCallback, useState} from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';
import {Picker} from '@react-native-picker/picker';

function ProductPickerView({items, curItem, onSubmit}) {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const _onValueChange = useCallback(
    (e, idx) => {
      setSelectedProduct(e);
      onSubmit(items.find((obj) => obj.id_product_kind === e));
    },
    [items, onSubmit],
  );
  return (
    <View style={styles.container}>
      <AppText large bold style={styles.titleText}>
        Sản phẩm
      </AppText>
      <Picker selectedValue={selectedProduct} onValueChange={_onValueChange}>
        {items.map((item) => (
          <Picker.Item label={item.name} value={item.id_product_kind} />
        ))}
      </Picker>
    </View>
  );
}

export default React.memo(ProductPickerView);
