import React from 'react';

import styles from './styles';
import {View} from 'react-native';
const AppContainer = ({style, children}) => (
  <View style={[styles.container, style]}>{children}</View>
);

export default AppContainer;
