import React, {useCallback} from 'react';
import styles from './styles';
import {View, TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scaleLandscape} from "../../../../../utils/responsive";

function ActionItem({title, hasRightArrow, color, icon, iconType, onPress}) {
    const _onPress = useCallback(() => {
        typeof onPress === 'function' && onPress();
    }, [onPress]);

    return (<TouchableOpacity style={styles.container} onPress={_onPress}>
        <View style={styles.left}>
            <Icon name={icon} type={iconType} style={[styles.iconLeft, {color: color}]} size={scaleLandscape(20)}/>
            <AppText normal medium style={[styles.titleTxt, {color: color}]}>{title}</AppText>
        </View>
        {hasRightArrow && (<AppText small style={styles.rightTxt}>{hasRightArrow}</AppText>)}
    </TouchableOpacity>);
}

export default React.memo(ActionItem);
