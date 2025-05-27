import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';
import ActionItem from '../ActionItem';
import codePush from 'react-native-code-push';
import DeviceInfo from 'react-native-device-info';

function SupportSetting({onPress}) {

    const onButtonPress = () => {
        codePush.sync({
            updateDialog: {appendReleaseDescription: true}, installMode: codePush.InstallMode.IMMEDIATE,
        });
    };

    return (<View style={styles.container}>
        <AppText fit semi style={styles.headerTitle}>
            Hỗ trợ và cài đặt
        </AppText>
        <View style={styles.actionsView}>
            <ActionItem
                title={'Cập nhật phiên bản'}
                icon={'download'}
                iconType={'AntDesign'}
                hasRightArrow={DeviceInfo.getBuildNumber()}
                onPress={onButtonPress}
                color={`#606060`}
            />
            <ActionItem
                title={'Đăng xuất'}
                iconType={'FontAwesome5'}
                icon={'sign-out'}
                onPress={onPress}
                color={`rgba(229, 80, 57, 1)`}
            />
        </View>
    </View>);
}

export default React.memo(SupportSetting);
