import React, {useCallback} from 'react';
import FilterView from './Filter.view';
import NavigationServices, {getParams} from '../../../utils/navigationServices';
import {convertData} from './Filter.constants';

export default function FilterContainer({navigation, route}) {
    const {values, setFieldValue, products, nameFilter, typeField} = getParams(route);
    const onPressBack = useCallback(() => {
        NavigationServices.goBack();
    }, []);
    return <FilterView
        typeField={typeField}
        products={convertData(products, typeField, values)}
        onPressBack={onPressBack}
        nameFilter={nameFilter}
        values={values}
        setFieldValue={setFieldValue}
    />;
}
