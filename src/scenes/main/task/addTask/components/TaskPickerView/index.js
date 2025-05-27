import React, {useCallback, useState} from 'react';
import {Picker} from '@react-native-picker/picker';

function TaskPickerView({items, onSubmit}) {
  const [selectedTaskKind, setSelectedTaskKind] = useState('1');
  const _onValueChange = useCallback(
    (e, idx) => {
      setSelectedTaskKind(e);
      onSubmit(items.find((obj) => obj.id === e));
    },
    [items, onSubmit],
  );
  return (
    <Picker selectedValue={selectedTaskKind} onValueChange={_onValueChange}>
      {items.map((item) => (
        <Picker.Item label={item.name} value={item.id} />
      ))}
    </Picker>
  );
}

export default React.memo(TaskPickerView);
