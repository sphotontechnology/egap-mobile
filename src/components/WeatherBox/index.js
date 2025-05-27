import React, {useCallback, useEffect, useState} from 'react';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
// import {getWeatherApi} from 'services/api/weatherApi';
import Axios from 'axios';
import AppSensor from "../AppSensor";
import NavBar from "../NavBar";

function WeatherBox({}) {
    const [wInfo, setArray] = useState([]);
    // const getWeatherData = async (id) => {
    //   await getWeatherApi(id)
    //     .then((json) => {
    //       setArray(json);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     })
    //     .finally({});
    // };
    const GetWeatherData = useCallback(() => {
        var FormData = require('form-data');
        var data = new FormData();
        var config = {
            method: 'get', url: 'http://egap.vn/api_weather_now/2', headers: {}, data: data,
        };
        const _GetWeatherData = Axios(config)
            .then(function (response) {
                let data = response.data;
                setArray(data);
            })
            .catch(function (error) {
            });
        return () => _GetWeatherData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    useEffect(() => {
        // getWeatherData();
        GetWeatherData();
    }, [GetWeatherData]);

    const onPressWeather = useCallback(() => {
        NavigationServices.navigate(SCENE_NAMES.WEATHER_AND_FORECAST);
    }, []);
    // {(wInfo.temperature !== undefined ? wInfo.temperature : '20') +
    // '°C - ' +
    // (wInfo.humidity !== undefined ? wInfo.humidity : '60') +
    // '% - ' +
    // (wInfo.solar !== undefined ? wInfo.solar : '00') +
    // 'w/m² - ' +
    // (wInfo.wind_speed !== undefined ? wInfo.wind_speed : '1') +
    // 'km/h - ' +
    // (wInfo.wind_direction !== undefined ? wInfo.wind_direction : 'Bắc')}
    return (<View style={styles.container}>
        <TouchableOpacity style={styles.touchView} onPress={onPressWeather}>
            <AppSensor icon={require('assets/icons/temp.png')}
                       title={(wInfo.temperature !== undefined ? wInfo.temperature : '20') + '°C'}/>
            <AppSensor icon={require('assets/icons/water.png')}
                       title={(wInfo.humidity !== undefined ? wInfo.humidity : '60') + '%'}/>
            <AppSensor icon={require('assets/icons/sun.png')}
                       title={(wInfo.solar !== undefined ? wInfo.solar : '00') + 'w/m²'}/>
            <AppSensor icon={require('assets/icons/wind.png')}
                       title={(wInfo.wind_speed !== undefined ? wInfo.wind_speed : '1') + 'km/h'}/>
            <AppSensor icon={require('assets/icons/compass.png')}
                       title={(wInfo.wind_direction !== undefined ? wInfo.wind_direction : 'Bắc')}/>
        </TouchableOpacity>
    </View>);
}

export default React.memo(WeatherBox);
