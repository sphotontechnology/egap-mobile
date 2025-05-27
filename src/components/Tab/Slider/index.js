import React from 'react';
import {Dimensions, View} from 'react-native';
import {TabBar, TabView} from 'react-native-tab-view';
import styles from './styles';
import AppText from '../../AppText';
import {COLOR_BACKGROUND_2, COLOR_GRAY_4} from '../../../constants/colors';
import {getString} from '../../../utils/i18n';
import {scaleLandscape, scalePortrait} from '../../../utils/responsive';

const initialLayout = {width: Dimensions.get('window').width};

const TabSlider = (props) => {

    const renderTabBar = (props) => (<TabBar
        {...props}
        renderIndicator={() => null}
        scrollEnabled
        style={[styles.tabbar, {backgroundColor: COLOR_BACKGROUND_2}]}
        tabStyle={styles.tab}
        activeColor={`white`}
        inactiveColor={'red'}
        renderLabel={({route, focused, color}) => {
            return (<View
                style={[styles.viewLabel, {
                    borderBottomColor: focused ? `rgba(12, 113, 49, 1)` : 'transparent',
                }]}
            >
                <AppText
                    style={{
                        width: '100%',
                        color: focused ? `#0C7131` : COLOR_GRAY_4,
                        fontSize: scalePortrait(14),
                        lineHeight: scaleLandscape(21),
                    }}
                    subhead
                    medium={focused}
                >
                    {getString(`tabBar.${route.title}`)}
                </AppText>
            </View>);
        }}
    />);

    return (<TabView
        scrollEnabled={true}
        initialLayout={initialLayout}
        renderTabBar={renderTabBar}
        {...props}
    />);
};

export default TabSlider;
