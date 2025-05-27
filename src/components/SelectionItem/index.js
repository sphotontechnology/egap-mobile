import React, {useCallback} from 'react';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import AppText from 'components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';

function SelectionItem({title, icon, iconType, onPress, selection}) {
    const _onPress = useCallback(() => {
        typeof onPress === 'function' && onPress();
    }, [onPress]);

    return (<TouchableOpacity style={styles.container} onPress={_onPress}>
        <AppText fit style={[styles.titleTxt, selection && {
         color: `rgba(57, 57, 57, 1)`,
        }]}>{title}</AppText>
        <Icon name={icon} type={iconType} style={[styles.iconRight]}/>
    </TouchableOpacity>);
}

export default React.memo(SelectionItem);
