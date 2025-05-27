import React, {useCallback} from 'react';
import styles from './styles';
import {TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import ShadowView from 'react-native-simple-shadow-view/src/ShadowView';

function FabButton({icon, typeIcon, onPress, style}) {
  const _onPress = useCallback(() => {
    typeof onPress === 'function' && onPress();
  }, [onPress]);

  return (
    <View style={[styles.shadowView, style]}>
      <TouchableOpacity style={styles.container} onPress={_onPress}>
        <Icon
          name={icon || 'plus'}
          type={typeIcon || 'FontAwesome5'}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

export default React.memo(FabButton);
