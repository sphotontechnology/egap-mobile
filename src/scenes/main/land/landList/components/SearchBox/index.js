import React, {useCallback} from 'react';
import styles from './styles';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR_TEXT_PRIMARY} from 'constants/colors';

function SearchBox({onPressFilter, value, onChangeText, onSubmitEditing}) {
    const _onPressFilter = useCallback(() => {
        typeof onPressFilter === 'function' && onPressFilter();
    }, [onPressFilter]);

    const _onSubmitEditing = useCallback(() => {
        typeof onSubmitEditing === 'function' && onSubmitEditing();
    }, [onSubmitEditing]);

    return (<View style={styles.container}>
        <View style={styles.left}>
            <Icon type={'FontAwesome5'} name={'search'} style={styles.iconSearch}/>
            <TextInput
                placeholder={'Tìm kiếm'}
                style={styles.textInput}
                selectionColor={COLOR_TEXT_PRIMARY}
                value={value}
                onChangeText={onChangeText}
                onSubmitEditing={_onSubmitEditing}
            />
        </View>
        <View style={styles.right}>
            <View style={styles.verticalDash}/>
            <TouchableOpacity
                style={styles.iconFilterTouch}
                onPress={_onPressFilter}>
                <Icon type={'FontAwesome5'} name={'filter'} style={styles.iconFilter}/>
            </TouchableOpacity>
        </View>
    </View>);
}

export default React.memo(SearchBox);
