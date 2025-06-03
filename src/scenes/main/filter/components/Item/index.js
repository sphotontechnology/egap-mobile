import React, {} from 'react';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import AppText from 'components/AppText';
import Image from '../../../../../components/Image';
import {scaleLandscape} from '../../../../../utils/responsive';
import {IC_FILTER_CHECK} from '../../../../../assets/path';

const Item = props => {
    return (<TouchableOpacity
        style={[styles.container]}
        onPress={props.onClick}>
        {props.checked ? (
            <Image style={{width: scaleLandscape(24), height: scaleLandscape(24)}} source={IC_FILTER_CHECK}/>) : (
            <View style={{width: scaleLandscape(24), height: scaleLandscape(24)}}/>)}
        <AppText fit style={styles.textItem}>{props.item.name}</AppText>
    </TouchableOpacity>);
};


export default React.memo(Item);
