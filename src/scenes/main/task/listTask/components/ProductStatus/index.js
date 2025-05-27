import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import AppText from 'components/AppText';
import AppButton from 'components/AppButton';

function ProductStatus({listTask}) {
    return (<View style={styles.container}>
        <View style={styles.top}>
            <AppText fit style={{color: 'rgba(160, 160, 160, 1)'}}>
                {'Đã trồng: '}
                <AppText bold fit>
                    {listTask.grow_day_total}
                </AppText>
            </AppText>
            <AppText fit style={{color: 'rgba(160, 160, 160, 1)'}}>
                {'Phun thuốc gần nhất: '}
                <AppText bold fit>
                    {listTask.lastest_spray ?? 'kxd'}
                </AppText>
            </AppText>
        </View>
        <AppButton
            title={'Kết thúc và ngừng bán'}
            style={styles.button}
            titleStyle={styles.titleStyle}
        />
    </View>);
}

export default React.memo(ProductStatus);
