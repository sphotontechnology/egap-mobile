import * as React from 'react';
import {View} from 'react-native';
import styles from './ProductList.styles';
import AppText from 'components/AppText';
// import {NAMESPACE} from './ProductList.constants';

function ProductListView() {
  return (
    <View style={styles.container}>
      <AppText>ProductList</AppText>
    </View>
  );
}

export default React.memo(ProductListView);
