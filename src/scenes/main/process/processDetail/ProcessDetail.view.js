import * as React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './ProcessDetail.styles';
import AppHeader from 'components/AppHeader';
import Description from './components/Description';
// import {NAMESPACE} from './ProcessDetail.constants';
import AppConfigs from 'components/index.js/configs/appConfigs';

function ProcessDetailView({onPressBack, processItem, name}) {
    const END_POINT = AppConfigs.END_POINT;
    return (<View style={styles.container}>
        <AppHeader title={processItem.seed_name} onPressBack={onPressBack}/>
        <ScrollView style={styles.container} horizontal={false}>
            <Image
                source={{uri: `${END_POINT}/` + processItem?.image}}
                style={styles.image}
            />
            <Description processItem={processItem}/>
        </ScrollView>
    </View>);
}

export default React.memo(ProcessDetailView);
