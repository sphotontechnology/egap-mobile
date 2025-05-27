import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
// Screen Import
import ListTaskContainer from 'scenes/main/task/listTask/ListTask.container';
import LandDetailContainer from 'scenes/main/land/landDetail/LandDetail.container';
import ProcessDetailContainer from 'scenes/main/process/processDetail/ProcessDetail.container';
import AddProductToLandContainer from 'scenes/main/land/addProductToLand/AddProductToLand.container';
import CreateLandContainer from 'scenes/main/land/createLand/CreateLand.container';
import WeatherAndForecastContainer from 'scenes/main/weatherAndForecast/WeatherAndForecast.container';
import SignInContainer from 'scenes/auth/signIn/SignIn.container';
import MainTabNavigator from './TabNavigator';
import WeatherBox from 'components/WeatherBox';
import AddTaskContainer from 'scenes/main/task/addTask/AddTask.container';
import FilterContainer from 'scenes/main/filter/Filter.container';
import {useSelector} from "react-redux";
// import {Text, Image, View} from 'react-native';
const Stack = createStackNavigator();

function RootNavigator({onNavigationStateChange}) {
    const userInfo = useSelector((state) => state.auth.userInfo);

    return (<NavigationContainer
        onStateChange={onNavigationStateChange}
        ref={(navigatorRef) => {
            NavigationServices.setTopLevelNavigator(navigatorRef);
        }}>
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                headerBackTitle: null,
                headerTitleAlign: 'center',
                headerTruncatedBackTitle: null, ...TransitionPresets.SlideFromRightIOS,
            }}
        >
            {/* Screen */}
            {
                userInfo.fullname ? <>
                    <Stack.Screen
                        options={{
                            header: (props) => <WeatherBox props={props}/>, // headerLeft: () => {
                        }}
                        name={SCENE_NAMES.MAIN}
                        component={MainTabNavigator}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.LIST_TASK}
                        component={ListTaskContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.ADD_TASK}
                        component={AddTaskContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.LAND_DETAIL}
                        component={LandDetailContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.PROCESS_DETAIL}
                        component={ProcessDetailContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.ADD_PRODUCT_TO_LAND}
                        component={AddProductToLandContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.FILTER}
                        component={FilterContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.CREATE_LAND}
                        component={CreateLandContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.WEATHER_AND_FORECAST}
                        component={WeatherAndForecastContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.SIGN_IN}
                        component={SignInContainer}
                    />
                </> : <>
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.SIGN_IN}
                        component={SignInContainer}
                    />
                    <Stack.Screen
                        options={{
                            header: (props) => <WeatherBox props={props}/>, // headerLeft: () => {
                        }}
                        name={SCENE_NAMES.MAIN}
                        component={MainTabNavigator}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.LIST_TASK}
                        component={ListTaskContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.ADD_TASK}
                        component={AddTaskContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.LAND_DETAIL}
                        component={LandDetailContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.PROCESS_DETAIL}
                        component={ProcessDetailContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.ADD_PRODUCT_TO_LAND}
                        component={AddProductToLandContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.FILTER}
                        component={FilterContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.CREATE_LAND}
                        component={CreateLandContainer}
                    />
                    <Stack.Screen
                        options={{headerShown: false}}
                        name={SCENE_NAMES.WEATHER_AND_FORECAST}
                        component={WeatherAndForecastContainer}
                    />
                </>
            }
        </Stack.Navigator>
    </NavigationContainer>);
}

export default RootNavigator;
