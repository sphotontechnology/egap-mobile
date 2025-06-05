import React, { useCallback } from 'react';
import { ScrollView, View } from 'react-native';
import styles from './LandDetail.styles';
import AppHeader from 'components/AppHeader';
import ProductItem from './components/ProductItem';
import WeatherBox from '../../../../components/WeatherBox';

function LandDetailView({ onPressBack, landInfo, onPress }) {
  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <ProductItem
          key={(item.id || index).toString()}
          item={item}
          onPress={onPress}
          landInfo={landInfo}
        />
      );
    },
    [onPress]
  );
  return (
    <View style={styles.container}>
      <AppHeader title={landInfo?.area_name} onPressBack={onPressBack} />
      <WeatherBox />
      <ScrollView>
        <View style={styles.containerListStyle}>
          {landInfo.product.map((e, index) => {
            return renderItem({ item: e, index: index });
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default React.memo(LandDetailView);
