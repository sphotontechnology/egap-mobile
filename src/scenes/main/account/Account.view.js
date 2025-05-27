import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logIn} from 'appRedux/actions/authActions';
import styles from './Account.styles';
import AppText from 'components/AppText';
import UserInfo from './components/UserInfo';
import ActionItem from './components/ActionItem';
import NavigationServices from 'utils/navigationServices';
import SCENE_NAMES from 'constants/sceneName';
import codePush from 'react-native-code-push';
import SupportSetting from './components/SupportSetting';

function AccountView({userInfo}) {
    const dispatch = useDispatch();

    const onButtonPress = () => {
        codePush.sync({
            updateDialog: {appendReleaseDescription: true}, installMode: codePush.InstallMode.IMMEDIATE,
        });
    };

    return (<View style={styles.container}>
        <UserInfo userInfo={userInfo}/>
        <SupportSetting
            onUpdatePress={onButtonPress}
            onPress={() => {
                dispatch(logIn());
                NavigationServices.resetActionTo(SCENE_NAMES.SIGN_IN);
            }}
        />
    </View>);
}

export default React.memo(AccountView);
