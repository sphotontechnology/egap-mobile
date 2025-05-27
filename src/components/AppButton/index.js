/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {TouchableOpacity, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import AppText from 'components/AppText';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

function AppButton({
  title,
  onPress,
  style,
  titleStyle,
  leftIcon,
  rightIcon,
  icon,
  typeIcon,
  iconStyle,
  typeLeftIcon,
  typeRightIcon,
  disabled,
  ...otherProps
}) {
  const styleButton = useMemo(() => {
    return [styles.defaultButton(disabled), style];
  }, [style, disabled]);

  const styleTitle = useMemo(() => {
    return [styles.title(disabled), titleStyle];
  }, [titleStyle, disabled]);

  return (
    <TouchableOpacity
      disabled={disabled}
      block
      {...otherProps}
      onPress={onPress}
      style={[styleButton,{flexDirection: 'row', alignItems: 'center', justifyContent:'center'}]}>
      {!!leftIcon && (
        <Icon
          name={leftIcon?.name}
          type={leftIcon?.type}
          style={{...styles.icon(disabled), ...leftIcon?.style}}
        />
      )}
      <AppText bold fit style={styleTitle}>
        {title}
      </AppText>
      {rightIcon && (
        <Icon
          name={rightIcon?.name}
          type={rightIcon?.type}
          style={{...styles.icon(disabled), ...rightIcon?.style}}
        />
      )}
    </TouchableOpacity>
  );
}

AppButton.propTypes = {
  colorLinear: PropTypes.array,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  titleStyle: PropTypes.any,
  style: ViewPropTypes.style,
};

AppButton.defaultProps = {
  title: 'NONE',
};

export default React.memo(AppButton);
