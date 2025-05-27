import React, {useCallback} from 'react';
import styles from './styles';
import {View, FlatList, Text} from 'react-native';
import AppText from 'components/AppText';
import ItemInfo from '../ItemInfo';

function Description({processItem}) {
    const keyExtractor = useCallback((item, index) => (item.id || index).toString(), []);

    const renderItem = useCallback(({item}) => {
        return (<ItemInfo
            title={'➤ ' + item.pename}
            content={item.period_description}
            image={item.period_image}
        />);
    }, []);
    return (<View style={styles.container}>
        <ItemInfo title={'Đặc điểm'} content={processItem.description}/>
        <View style={styles.break}/>
        <ItemInfo title={'Ưu điểm'} content={processItem.advantage}/>
        <View style={styles.break}/>

        <ItemInfo title={'Nhà cung cấp'} content={processItem.seed_supplier}/>
        <View style={styles.break}/>

        <AppText bold fit style={styles.titleText}>
            Quy trình
        </AppText>
        <View style={styles.periodView}>
            {processItem?.period_list?.map((item, index) => {
                return <View key={index.toString()}>
                    <ItemInfo
                        title={'➤ ' + item.pename}
                        content={item.period_description}
                        image={item.period_image}
                    />
                </View>;
            })}
            {/*<FlatList*/}
            {/*  data={processItem.period_list}*/}
            {/*  keyExtractor={keyExtractor}*/}
            {/*  renderItem={renderItem}*/}
            {/*  contentContainerStyle={styles.list}*/}
            {/*/>*/}
        </View>
    </View>);
}

export default React.memo(Description);
