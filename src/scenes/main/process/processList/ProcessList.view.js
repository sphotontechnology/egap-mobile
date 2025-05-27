// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useCallback} from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import ProcessItem from './components/ProcessItem';
import styles from './ProcessList.styles';

function ProcessListView({processList, onPressProcessItem}) {

    const renderItem = useCallback(({item, index}) => {
        return <ProcessItem key={(item.id || index).toString()} item={item} onPress={onPressProcessItem}/>;
    }, [onPressProcessItem]);

    return (<View style={styles.container}>
        <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}>
            <View style={styles.containerListStyle}>
                {processList.map((e, index) => {
                    return renderItem({item: e, index: index});
                })}
            </View>
        </ScrollView>
    </View>);
}

export default React.memo(ProcessListView);
