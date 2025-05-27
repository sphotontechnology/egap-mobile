import React, {useCallback, useState} from 'react';
import styles from './styles';
import {Picker} from '@react-native-picker/picker';

function OwnerPickerView({items, onSubmit}) {
  // const _onSubmit = useCallback(
  //   (e) => {
  //     typeof onSubmit === 'function' && onSubmit(e);
  //   },
  //   [onSubmit],
  // );

  // const _onValueChange = useCallback(
  //   (e, idx) => {
  //     onSubmit(items.find((obj) => obj.id_owner === e));
  //   },
  //   [items, onSubmit],
  // );

  const [selectedOwner, setSelectedOwner] = useState('1');

  const _onValueChange = useCallback(
    (e, idx) => {
      setSelectedOwner(e);
      onSubmit(items.find((obj) => obj.id_owner === e));
    },
    [items, onSubmit],
  );
  return (
    <Picker selectedValue={selectedOwner} onValueChange={_onValueChange}>
      {items.map((item) => (
        <Picker.Item label={item.name} value={item.id_owner} />
      ))}
    </Picker>
  );
}

export default React.memo(OwnerPickerView);
