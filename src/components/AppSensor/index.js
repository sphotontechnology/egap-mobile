/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {ViewPropTypes, View, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import AppText from 'components/AppText';
import styles from './styles';
import Image from "../Image";

function AppSensor({
                       title,
                       icon,
                   }) {


    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={icon}
            />
            <AppText medium style={styles.valueStyle}>
                {title}
            </AppText>

        </View>
    )

}

AppSensor.propTypes = {
    title: PropTypes.string.isRequired,
};

AppSensor.defaultProps = {
    title: '',
};

export default React.memo(AppSensor);
