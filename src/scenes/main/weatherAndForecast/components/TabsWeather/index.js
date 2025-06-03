import React from 'react';
import ForecastContent from '../ForecastContent';
import WeatherContent from '../WeatherContent';
import {SceneMap} from 'react-native-tab-view';
import {SafeAreaView} from 'react-native';
import TabSlider from '../../../../../components/Tab/Slider';

function TabsWeather() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([{
    key: 'forecast', title: 'today',
  }, {key: 'weather', title: 'forecast'}]);

  const renderScene = SceneMap({
    forecast: ForecastContent, weather: WeatherContent
  });
  return (<SafeAreaView
      style={{flex: 1}}
      edges={['right', 'top', 'left']}
  >
    <TabSlider
        navigationState={{
          index, routes: routes,
        }}
        renderScene={renderScene}
        onIndexChange={setIndex}
    />
  </SafeAreaView>);
  // return (
  //   <Tabs
  //     tabBarInactiveTextColor={'#aaa'}
  //     tabBarUnderlineStyle={styles.tabBarUnderlineStyle}
  //     tabContainerStyle={styles.tabContainer}>
  //     <Tab
  //       heading={getString(`${NAMESPACE}.today`)}
  //       tabStyle={styles.tab}
  //       activeTabStyle={styles.tab}
  //       textStyle={styles.tabBarTextStyle}
  //       activeTextStyle={styles.activeTextStyle}>
  //       <WeatherContent />
  //     </Tab>
  //     <Tab
  //       heading={getString(`${NAMESPACE}.forecast`)}
  //       tabStyle={styles.tab}
  //       activeTabStyle={styles.tab}
  //       textStyle={styles.tabBarTextStyle}
  //       activeTextStyle={styles.activeTextStyle}>
  //       <ForecastContent />
  //     </Tab>
  //   </Tabs>
  // );
}

export default React.memo(TabsWeather);
