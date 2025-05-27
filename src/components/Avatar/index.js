import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import {IMG_AVATAR_DEFAULT} from 'assets/path';

export default function Avatar(props) {
  const {uri, onPress} = props;
  const Container = onPress ? TouchableOpacity : View;
  return (
    <Container onPress={onPress}>
      <Image {...props} source={uri ? {uri} : IMG_AVATAR_DEFAULT} />
    </Container>
  );
}

Avatar.propTypes = {
  uri: PropTypes.string,
};

Avatar.defaultProps = {
  uri: '',
};
