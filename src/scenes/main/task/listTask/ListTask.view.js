import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import styles from './ListTask.styles';
import AppHeader from 'components/AppHeader';
import TaskItem from './components/TaskItem';
import FabButton from 'components/FabButton';
import ProductStatus from './components/ProductStatus';
// import {NAMESPACE} from './ListTask.constants';

function ListTaskView({
  productInfo,
  onPressBack,
  listTask,
  onPressPlus,
  getTaskListData,
}) {
  const renderItem = useCallback(({item, index}) => {
    return (
      <TaskItem item={item} index={index} getTaskListData={getTaskListData} listTask={listTask}/>
    );
  }, []);
  const keyExtractor = useCallback(
    (item, index) => item.key + index.toString(),
    [],
  );
  const ListFooterComponent = () => {
    return <ProductStatus listTask={listTask} />;
  };

  return (
    <View style={styles.container}>
      <AppHeader title={productInfo?.product_name} onPressBack={onPressBack} />
      <FlatList
        data={listTask.task}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.list}
        ListFooterComponent={ListFooterComponent}
      />
      <FabButton style={styles.fabButton} onPress={onPressPlus} />
    </View>
  );
}

export default React.memo(ListTaskView);
