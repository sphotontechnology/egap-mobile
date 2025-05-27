import React, {
    useLayoutEffect, useMemo, useCallback, useEffect, useState,
} from 'react';
import CreateLandView from './CreateLand.view';
import useSelectorShallow, {
    selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {LAND_SCHEME, NAMESCREEN, NAMESPACE} from './CreateLand.constants';
import {getString} from 'utils/i18n';
import NavigationServices from 'utils/navigationServices';
import {useSelector} from 'react-redux';
import {createLandApi} from 'services/api/landApi';
import {Alert} from 'react-native';
import appConfigs from 'components/index.js/configs/appConfigs';
import Axios from 'axios';
import {useFormik} from 'formik';
import NavigationService from '../../../../utils/navigationServices';
import SCENE_NAMES from '../../../../constants/sceneName';
import {useActions} from '../../../../hooks/useActions';
import {getIdUser} from '../../../../appRedux/actions/landListActions';

const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [// ACTION.HANDLER,
]);

export default function CreateLandContainer({navigation}) {
    const actions = useActions({getIdUser});
    const userId = useSelector((state) => state.auth.userInfo.id_production);
    const isLoading = useSelectorShallow(loadingSelector);
    const productionId = useSelector((state) => state.auth.userInfo.id_production);
    const [ownerList, setArray] = useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: getString(`${NAMESPACE}.title`),
        });
    }, [navigation]);

    const onPressBack = useCallback(() => {
        NavigationServices.goBack();
    }, []);

    const getOwnerListData = useCallback(() => {
        var FormData = require('form-data');
        var data = new FormData();
        var config = {
            method: 'get',
            url: `${appConfigs.END_POINT}/owner/owner_production/${productionId}`,
            headers: {},
            data: data,
        };
        const _getOwnerListData = Axios(config)
            .then(function (response) {
                let data = response.data;
                setArray(data);
            })
            .catch(function (error) {
            });
        return () => _getOwnerListData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getOwnerListData();
    }, [getOwnerListData]);

    const initValues = useMemo(() => {
        return {
            title: '', area: '', owner: {},
        };
    }, []);

    const onPressSubmit = useCallback(async (values) => {
        let payload = {
            id_production: productionId, name: values.title, m2_area: values.area, id_owner: values.owner.id_owner,
        };
        if (values.title == '' || values.area == '') {
            Alert.alert('Bạn cần nhập thông số tên và diện tích đất');
        } else {
            await createLandApi(payload)
                .then((json) => {
                    Alert.alert('Đã lưu', 'Thêm lô đất thành công', [{
                        text: 'Đồng ý', onPress: () => NavigationServices.goBack(), style: 'default',
                    }]);
                })
                .catch((error) => {
                    Alert.alert('Đã có lỗi khi thêm lô');
                })
                .finally(()=>{
                    actions.getIdUser(userId);
                });
        }
    }, [productionId]);
    const {handleChange, values, handleSubmit, setFieldValue} = useFormik({
        initialValues: initValues, validationSchema: LAND_SCHEME, validateOnChange: false, onSubmit: onPressSubmit,
    });
    const onPressNavigateFilter = useCallback((item) => {
        NavigationService.navigate(SCENE_NAMES.FILTER, {
            values: values,
            setFieldValue: setFieldValue,
            products: ownerList,
            nameFilter: NAMESCREEN,
            typeField : 'owner',
        });
    }, [ownerList, values, setFieldValue]);

    return (<CreateLandView
        onPressNavigateFilter={onPressNavigateFilter}
        values={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        onPressBack={onPressBack}
        initValues={initValues}
        onPressSubmit={onPressSubmit}
        ownerList={ownerList}
    />);
}
