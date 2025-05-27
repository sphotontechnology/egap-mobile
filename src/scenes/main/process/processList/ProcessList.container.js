import React, {useLayoutEffect, useCallback, useState, useEffect} from 'react';
import ProcessListView from './ProcessList.view';
import useSelectorShallow, {
    selectorWithProps,
} from 'hooks/useSelectorShallowEqual';
import {getIsFetchingByActionsTypeSelector} from 'appRedux/selectors/loadingSelector';
import {NAMESPACE} from './ProcessList.constants';
import {getString} from 'utils/i18n';
// import {getProcessListSelector} from 'appRedux/selectors/processSelector';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
import {getProcessListApi} from 'services/api/processApi';
import {useSelector} from 'react-redux';
//import {getLandListApi} from 'services/api/landApi';


const loadingSelector = selectorWithProps(getIsFetchingByActionsTypeSelector, [// ACTION.HANDLER,
]);

export default function ProcessListContainer({navigation}) {
    const userId = useSelector((state) => state.auth.userInfo.id_production);
    const [processListData, setArray] = useState([]);
    const getProcessListData = async (id) => {
        await getProcessListApi(id)
            .then((json) => {
                setArray(json.data);
            })
            .catch((error) => {
            })
            .finally({});
    };

    useLayoutEffect(() => {
        getProcessListData(userId);
    }, [userId]);
    const isLoading = useSelectorShallow(loadingSelector);
    //const processList = useSelectorShallow(getProcessListSelector);


    const onPressProcessItem = useCallback((item) => {
        NavigationServices.navigate(SCENE_NAMES.PROCESS_DETAIL, {
            processItem: item,
        });
    }, []);

    return (<ProcessListView
        isLoading={isLoading}
        processList={processListData}
        onPressProcessItem={onPressProcessItem}
    />);
}
