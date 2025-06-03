import React from 'react';
import { Dimensions, View } from 'react-native';
import { TabBar, TabView } from 'react-native-tab-view';
import styles from './styles';
import AppText from '../../AppText';
import {
  COLOR_BACKGROUND_2,
  COLOR_BORDER_BOTTOM,
  COLOR_GRAY_4,
  COLOR_GRAY_ICON,
  COLOR_GRAY_TEXT,
  COLOR_PRIMARY,
  COLOR_STATUSBAR,
  COLOR_TEXT_DISABLE,
  COLOR_TEXT_SECONDARY,
} from '../../../constants/colors';
import { getString } from '../../../utils/i18n';
import { scaleLandscape, scalePortrait } from '../../../utils/responsive';

const initialLayout = { width: Dimensions.get('window').width };

const TabSlider = (props) => {
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      scrollEnabled
      style={[styles.tabbar, { backgroundColor: COLOR_BACKGROUND_2 }]}
      tabStyle={styles.tab}
      activeColor={COLOR_PRIMARY}
      inactiveColor={COLOR_TEXT_DISABLE}
      inactiveIndicatorContainerStyle={{
        backgroundColor: 'red',
        height: 2,
        borderWidth: 1,
        borderColor: 'blue',
      }}
      renderIndicator={() => {}}
      //   renderLabel={({ route, focused, color }) => {
      //     return (
      //       <View
      //         style={[
      //           styles.viewLabel,
      //           {
      //             borderBottomColor: focused
      //               ? 'rgba(12, 113, 49, 1)'
      //               : 'transparent',
      //           },
      //         ]}
      //       >
      //         <AppText
      //           style={{
      //             width: '100%',
      //             color: focused ? "#0C7131" : COLOR_GRAY_4,
      //             fontSize: scalePortrait(14),
      //             lineHeight: scaleLandscape(21),
      //           }}
      //           subhead
      //           medium={focused}
      //         >
      //           {getString(`tabBar.${route.title}`)}
      //         </AppText>
      //       </View>
      //     );
      //   }}
    />
  );

  return (
    <TabView
      scrollEnabled={true}
      initialLayout={initialLayout}
      renderTabBar={renderTabBar}
      {...props}
    />
  );
};

export default TabSlider;
