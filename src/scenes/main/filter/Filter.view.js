import React, {} from 'react';

import AppHeader from '../../../components/AppHeader';
import {getString} from '../../../utils/i18n';
import {NAMESPACE} from './Filter.constants';
import Item from './components/Item';
import {ScrollView, View} from 'react-native';
import {scaleLandscape} from '../../../utils/responsive';
import {COLOR_BACKGROUND} from '../../../constants/colors';


function FilterView({products, onPressBack, nameFilter, values, setFieldValue, typeField}) {
    return (<View style={{flex: 1}}>
        <AppHeader
            title={`${getString(`${NAMESPACE}.${nameFilter}.headerTitle`)}`}
            onPressBack={onPressBack}
        />
        <ScrollView style={{
            flex: 1,
            paddingHorizontal: scaleLandscape(16),
            paddingVertical: scaleLandscape(16),
            marginBottom: scaleLandscape(16),
            backgroundColor: COLOR_BACKGROUND,
        }} showsVerticalScrollIndicator={false}>
            {products.map((i, index) => (<Item
                key={index.toString()}
                item={i}
                onClick={() => {
                    setFieldValue(typeField, i);
                    onPressBack && onPressBack();
                }}
                checked={i?.check}
            />))}
        </ScrollView>
    </View>);
}

export default React.memo(FilterView);
