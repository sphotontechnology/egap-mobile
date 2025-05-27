import React, {
    useLayoutEffect, useCallback, useMemo, useState, useEffect,
} from 'react';
import {Alert} from 'react-native';
import AddTaskView from './AddTask.view';
import useSelectorShallow, {
    selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESCREEN, NAMESPACE, TASK_SCHEME, taskList} from './AddTask.constants';
import {getString} from 'utils/i18n';
import NavigationServices, {getParams} from 'utils/navigationServices';
import {getTaskKindListApi} from 'services/api/taskApi';
import {createTaskApi} from 'services/api/taskApi';
import {useSelector} from 'react-redux';
import {useFormik} from 'formik';
import NavigationService from '../../../../utils/navigationServices';
import SCENE_NAMES from '../../../../constants/sceneName';
// import './global.js'
// import pathToImage from './AddTask.view';
const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [// ACTION.HANDLER,
]);

export default function AddTaskContainer({navigation, route}) {
    const isLoading = useSelectorShallow(loadingSelector);
    const [taskKindList, setArray] = useState([]);
    const userInfo = useSelector((state) => state.auth.userInfo);
    const userId = userInfo.id_production;
    const {productInfo} = getParams(route);
    // console.log('im so confused',productInfo);
    useLayoutEffect(() => {
        navigation.setOptions({
            title: getString(`${NAMESPACE}.title`),
        });
    }, [navigation]);

    const onPressBack = () => {
        // console.log(123);
        const render = route.params.render;
        render();
        NavigationServices.goBack();
    };

    const onPressSubmit = useCallback(async (e) => {
        console.log('e.image', e.image);
        let payload = {
            id_task_kind: e.task.id,
            name: e.task.name,
            description: e.description,
            id_manager: userInfo.id_manager,
            id_product: productInfo.id_product,
            image: e.image,
        };
        await createTaskApi(payload)
            .then((json) => {
                Alert.alert('Đã lưu', 'Thêm công việc thành công', [// eslint-disable-line no-alert
                    {
                        text: 'Đồng ý', onPress: () => onPressBack(), style: 'default',
                    }]);
            })
            .catch((error) => {
                Alert.alert('Đã có lỗi khi thêm công việc');
            })
            .finally({});
    }, [userInfo, productInfo]);

    const initValues = useMemo(() => {
        return {
            task: taskList[0], description: '', image: '',
        };
    }, []);

    const getTaskKindListData = async (id) => {
        await getTaskKindListApi(id)
            .then((json) => {
                setArray(json);
            })
            .catch((error) => {
            })
            .finally({});
    };

    useEffect(() => {
        getTaskKindListData(productInfo?.id_product);
    }, [productInfo?.id_product]);

    const {handleChange, values, handleSubmit, setFieldValue} = useFormik({
        initialValues: initValues, validationSchema: TASK_SCHEME, validateOnChange: false, onSubmit: onPressSubmit,
    });
    const onPressNavigateFilter = useCallback((item) => {
        NavigationService.navigate(SCENE_NAMES.FILTER, {
            values: values,
            setFieldValue: setFieldValue,
            products: taskKindList,
            nameFilter: NAMESCREEN,
            typeField: 'task',
        });
    }, [taskKindList, values, setFieldValue]);
    return (<AddTaskView
        onPressNavigateFilter={onPressNavigateFilter}
        handleChange={handleChange}
        values={values}
        handleSubmit={handleSubmit}
        setFieldValue={setFieldValue}
        isLoading={isLoading}
        onPressBack={onPressBack}
        initValues={initValues}
        onPressSubmit={onPressSubmit}
    />);
}
