import * as React from 'react';
import {View} from 'react-native';
import styles from './WeatherAndForecast.styles';
import AppHeader from 'components/AppHeader';
import {NAMESPACE} from './WeatherAndForecast.constants';
import {getString} from 'utils/i18n';
import TabsWeather from './components/TabsWeather';

function WeatherAndForecastView({onPressBack}) {
  return (
    <View style={styles.container}>
      <AppHeader
        title={getString(`${NAMESPACE}.title`)}
        onPressBack={onPressBack}
      />
      <TabsWeather />
    </View>
  );
}

export default React.memo(WeatherAndForecastView);
