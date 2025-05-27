/* eslint-disable no-unused-vars */
// eslint-disable-next-line react-hooks/exhaustive-deps
import React, {useCallback, useState, useEffect} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import styles from './LandList.styles';
import FabButton from 'components/FabButton';
import LandItem from './components/LandItem';
import SearchBox from './components/SearchBox';
import ModalFilterLand from 'components/Modal/ModalFilterLand';
// import {NAMESPACE} from './LandList.constants';
import {useSelector} from 'react-redux';
import axios from 'axios';
import appConfigs from 'components/index.js/configs/appConfigs';

function LandListView({
  onPressPlus,
  landList,
  value,
  onChangeText,
  modalVisible,
  onPressOpenFilter,
  onPressCloseModal,
  onPressFilter,
  onPressPlusLandItem,
  onPressItem,
  onRefresh
}) {
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <LandItem
          item={item}
          key={(item.id || index).toString()}
          onPressPlus={onPressPlusLandItem}
          onPressItem={onPressItem}
        />
      );
    },
    [onPressPlusLandItem, onPressItem],
  );
  // const [Data, setData] = useState([]);
  const userInfo = useSelector((state) => state.auth.userInfo);

    const filterLandList = () =>{
        if(userInfo?.id_manager_role == 2){
            return landList.filter((item) => item.oname === userInfo?.fullname)
        }else return landList
    }


  return (
    <View style={styles.container}>
      {/*<SearchBox*/}
      {/*  value={value}*/}
      {/*  onChangeText={onChangeText}*/}
      {/*  onPressFilter={onPressOpenFilter}*/}
      {/*/>*/}
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        refreshControl={
            <RefreshControl
                refreshing={false}
                onRefresh={onRefresh}
            />
        }
      >
        <View style={styles.containerListStyle}>
          {filterLandList().map((e, index) => {
            return renderItem({item: e, index: index});
          })}
        </View>
      </ScrollView>
        {
            userInfo?.id_manager_role == 1 ?  <FabButton style={styles.fabButton} onPress={onPressPlus} /> : null
        }
      <ModalFilterLand
        modalVisible={modalVisible}
        onPressCancel={onPressCloseModal}
        onPressFilter={onPressFilter}
      />
    </View>
  );
}

export default React.memo(LandListView);
