import React from 'react';
import AppText from 'components/AppText';
import styles from './styles';
import { scaleLandscape } from '../../utils/responsive';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function TextInputBox({
  placeholder,
  containerStyle,
  textInputStyle,
  keyboardType,
  error,
  messageError,
  hasShadow,
  rightIcon,
  leftIcon,
  onPressRightIcon,
  label,
  onChangeText,
  hasUnderline,
  ...otherProps
}) {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        error ? styles.heightWithError : {},
        hasShadow && styles.shadow,
      ]}
    >
      {error && <AppText style={styles.txtError}>{messageError}</AppText>}
      {label && <AppText style={styles.label}>{label}</AppText>}
      <View style={styles.inputView}>
        {leftIcon && (
          <Icon name={leftIcon} type="FontAwesome5" style={styles.icon} />
        )}
        <TextInput
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={[
            styles.textInput,
            textInputStyle,
            leftIcon && {
              marginLeft: scaleLandscape(10),
            },
          ]}
          placeholderTextColor={'#A0A0A0'}
          keyboardType={keyboardType}
          {...otherProps}
        />
        {rightIcon && (
          <Icon
            name={rightIcon}
            type="FontAwesome5"
            onPress={onPressRightIcon}
            style={styles.icon}
          />
        )}
      </View>
      {hasUnderline && <View style={styles.underline} />}
    </View>
  );
}

export default React.memo(TextInputBox);
