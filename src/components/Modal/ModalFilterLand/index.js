import React, {useCallback, useState} from 'react';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import AppText from 'components/AppText';
import Modal from 'react-native-modal';
import {getString} from 'utils/i18n';
import {COLOR_TEXT_PRIMARY} from 'constants/colors';
import {filterOptions} from './helper';
import Icon from 'react-native-vector-icons/FontAwesome';

const OptionItem = React.memo(({item, onPress, currentItem}) => {
  const {label} = item || {};
  const selected = item?.id === currentItem?.id;

  const _onPress = useCallback(() => {
    typeof onPress === 'function' && onPress(item);
  }, [item, onPress]);

  return (
    <TouchableOpacity style={styles.item} onPress={_onPress}>
      {selected ? (
        <Icon
          type={'FontAwesome5'}
          name={'radiobox-marked'}
          style={styles.selectedIcon}
        />
      ) : (
        <Icon
          type={'MaterialCommunityIcons'}
          name={'radiobox-blank'}
          style={styles.blankIcon}
        />
      )}
      <AppText style={styles.optionLabelText}>{label}</AppText>
    </TouchableOpacity>
  );
});

function ModalFilterLand({modalVisible, onPressCancel, onPressFilter}) {
  const _onPressCancel = useCallback(() => {
    if (typeof onPressCancel === 'function') {
      return onPressCancel();
    }
  }, [onPressCancel]);

  const [selectedOption, setSelectedOption] = useState({});

  const _onPressFilter = useCallback(() => {
    typeof onPressFilter === 'function' && onPressFilter(selectedOption);
  }, [onPressFilter, selectedOption]);

  const onPressOption = useCallback((item) => {
    setSelectedOption(item);
  }, []);

  return (
    <Modal
      hideModalContentWhileAnimating={true}
      useNativeDriver
      isVisible={modalVisible}
      coverScreen
      backdropColor={COLOR_TEXT_PRIMARY}
      backdropOpacity={0.7}
      onBackdropPress={_onPressCancel}
      style={styles.modal}>
      <View style={styles.container}>
        <AppText>
          {'Tìm lô sản xuất chưa được kiểm tra trong các ngày gần đây'}
        </AppText>
        <View style={styles.listOptions}>
          {filterOptions.map((e, index) => {
            return (
              <OptionItem
                item={e}
                key={(e.id || index).toString()}
                onPress={onPressOption}
                currentItem={selectedOption}
              />
            );
          })}
        </View>
        <View style={styles.buttonsFooter}>
          <TouchableOpacity style={styles.button} onPress={_onPressCancel}>
            <AppText bold style={styles.buttonText}>
              {getString('modal.filterLand.cancel')}
            </AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={_onPressFilter}>
            <AppText bold style={styles.buttonText}>
              {getString('modal.filterLand.filter')}
            </AppText>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default React.memo(ModalFilterLand);
