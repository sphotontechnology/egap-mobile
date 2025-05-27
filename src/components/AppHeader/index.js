import React, {useCallback} from 'react';
import styles from './styles';
import {TouchableOpacity, SafeAreaView} from 'react-native';
import AppText from 'components/AppText';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scaleLandscape} from "../../utils/responsive";

function AppHeader({title, onPressBack}) {
  const _onPressBack = useCallback(() => {
    typeof onPressBack === 'function' && onPressBack();
  }, [onPressBack]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.touchBack} onPress={_onPressBack}>
        <Icon style={styles.iconBack} type="FontAwesome5" name={'arrow-left'} size={scaleLandscape(20)}/>
      </TouchableOpacity>
      <AppText bold fit style={styles.titleText} numberOfLines={2}>
        {title}
      </AppText>
    </SafeAreaView>
  );
}

export default React.memo(AppHeader);
