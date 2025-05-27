import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './GetStart.styles';
import Background from '../../components/Background';
import AppText from '../../components/AppText';
import {
    IMG_LOGO_COMPANY_LOGIN,
    IMG_LOGO_COMPANY_SPLASH,
    IMG_LOGO_LOGIN,
    IMG_LOGO_PRODUCT_LOGIN,
} from '../../assets/path';

export function GetStartView() {
    return (<View style={styles.container}>
        {/*<Spinner color={COLOR_PRIMARY} />*/}
        <Background style={{
            flex: 1,
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
        }}/>
        <Image
            // source={require('../../../assets/images/logoNew.png')}
            source={IMG_LOGO_LOGIN}
            style={styles.logoImage}
        />
        <AppText fit large style={{
            textAlign: 'center', color: 'rgba(255, 255, 255, 1)',

        }}>Cổng thông tin quản lý giám sát quy trình xuất minh bạch & kết nối thị trường nông sản
            việt
            nam</AppText>
        <View style={styles.viewBottom}>
            <Image
                // source={require('../../../assets/images/logoNew.png')}
                source={IMG_LOGO_COMPANY_SPLASH}
                style={styles.logoProductImage}
            />
            <Image
                // source={require('../../../assets/images/logoNew.png')}
                source={IMG_LOGO_COMPANY_SPLASH}
                style={styles.logoCompanyImage}
            />
        </View>
    </View>);
}
