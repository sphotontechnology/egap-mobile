import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';

function UserInfo({userInfo}) {
    const {fullname, name} = userInfo || {};
    return (<View style={styles.container}>
        <AppText fit semi style={styles.HeaderTitle}>
            Thông tin tài khoản
        </AppText>
        <AppText normal style={styles.title}>Họ và tên</AppText>
        <AppText fit medium style={styles.value}>
            {fullname}
        </AppText>
        <AppText normal style={styles.title}>Cơ sở sản xuất</AppText>
        <AppText fit medium style={styles.value}>
            {name}
        </AppText>
    </View>);
}

export default React.memo(UserInfo);
