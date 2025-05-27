import React, {
    useLayoutEffect, useCallback, useMemo, useEffect, useState,
} from 'react';
import AddProductToLandView from './AddProductToLand.view';
import useSelectorShallow, {
    selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESCREEN, NAMESPACE, PRODUCT_SCHEME} from './AddProductToLand.constants';
import {getString} from 'utils/i18n';
import NavigationServices, {getParams} from 'utils/navigationServices';
import {addProductToLandApi} from 'services/api/landApi';
import {useSelector} from 'react-redux';
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

export default function AddProductToLandContainer({navigation, route}) {
    const isLoading = useSelectorShallow(loadingSelector);
    const {landInfo} = getParams(route);
    const userInfo = useSelector((state) => state.auth.userInfo);
    const userId = userInfo.id_production;
    const [productKindList, setArray] = useState([]);
    const actions = useActions({getIdUser});

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getString(`${NAMESPACE}.title`),
        });
    }, [navigation]);

    const onPressBack = useCallback(() => {
        NavigationServices.goBack();
    }, []);

    const initValues = useMemo(() => {
        return {
            product: {}, time: '',
        };
    }, []);

    const onPressSubmit = useCallback(async (e) => {
        let payload = {
            state: 1,
            name: e.time,
            id_production: userId,
            id_area: landInfo.id_area,
            id_product_kind: e.product.id_product_kind,
        };

        if (payload.id_product_kind === undefined) {
            Alert.alert('Có lỗi', `Chưa chọn danh mục`, [{
                text: 'Đồng ý', onPress: () => {
                }, style: 'default',
            }]);
        } else if (payload.name === '') {
            Alert.alert('Có lỗi', `Chưa nhập tên sản phẩm`, [{
                text: 'Đồng ý', onPress: () => {
                }, style: 'default',
            }]);
        } else {
            await addProductToLandApi(payload)
                .then((json) => {
                    if (json?.success === `0`) {
                        Alert.alert('Có lỗi', json?.error, [{
                            text: 'Đồng ý', onPress: () => {
                            }, style: 'default',
                        }]);
                    } else if (json?.success === `1`) {
                        Alert.alert('Đã lưu', 'Thêm sản phẩm thành công', [{
                            text: 'Đồng ý', onPress: () => {
                                NavigationServices.goBack();
                            }, style: 'default',
                        }]);
                    }
                })
                .catch((error) => {
                    Alert.alert('Đã có lỗi khi thêm sản phẩm');
                })
                .finally(() => {
                    actions.getIdUser(userId);
                });
        }
    }, [landInfo, userId]);

    const getProductKindListData = useCallback(() => {
        var FormData = require('form-data');
        var data = new FormData();
        var config = {
            method: 'get', url: `${appConfigs.END_POINT}/productKind/${userId}`, headers: {}, data: data,
        };
        const _getdataProcess = Axios(config)
            .then(function (response) {
                let data = response.data;
                setArray(data);
            })
            .catch(function (error) {
            });
        return () => _getdataProcess();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        getProductKindListData();
    }, [getProductKindListData]);
    const {handleChange, values, handleSubmit, setFieldValue} = useFormik({
        initialValues: initValues, validationSchema: PRODUCT_SCHEME, validateOnChange: false, onSubmit: onPressSubmit,
    });
    const onPressNavigateFilter = useCallback((item) => {
        NavigationService.navigate(SCENE_NAMES.FILTER, {
            values: values,
            setFieldValue: setFieldValue,
            products: productKindList,
            nameFilter: NAMESCREEN,
            typeField: 'product',
        });
    }, [productKindList, values, setFieldValue]);

    return (<AddProductToLandView
        isLoading={isLoading}
        landInfo={landInfo}
        onPressBack={onPressBack}
        products={productKindList}
        initValues={initValues}
        onPressSubmit={onPressSubmit}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        onPressNavigateFilter={onPressNavigateFilter}
        values={values}
    />);
}
