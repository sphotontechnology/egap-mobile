import React from 'react';
import AccountContainer from 'scenes/main/account/Account.container';
import {SafeAreaView, StatusBar} from 'react-native';
import ProcessListContainer from 'scenes/main/process/processList/ProcessList.container';
import LandListContainer from 'scenes/main/land/landList/LandList.container';
import TabSlider from '../components/Tab/Slider';
import {SceneMap} from 'react-native-tab-view';
import WeatherBox from '../components/WeatherBox';


function MainTabNavigator() {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([{
        key: 'land', title: 'land',
    }, {key: 'process', title: 'process'}, {
        key: 'account', title: 'account',
    }]);

    const renderScene = SceneMap({
        land: LandListContainer, process: ProcessListContainer, account: AccountContainer,
    });
    return (<SafeAreaView
        style={{flex: 1, marginTop: 29}}
        edges={['right', 'top', 'left']}
    >
        <StatusBar
            barStyle={'dark-content'}
            backgroundColor={'rgba(0,0,0,0.7)'}
            translucent
        />
        <WeatherBox/>
        <TabSlider
            navigationState={{
                index, routes: routes,
            }}
            renderScene={renderScene}
            onIndexChange={setIndex}
        />
    </SafeAreaView>);
}

export default MainTabNavigator;
