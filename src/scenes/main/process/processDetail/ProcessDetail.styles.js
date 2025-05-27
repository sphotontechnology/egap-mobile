import {COLOR_BACKGROUND} from 'constants/colors';
import {DEFAULT_PADDING_VERTICAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND,
  },
  image: {
    width: scalePortrait(100),
    height: scalePortrait(100),
    alignSelf: 'center',
    marginTop: DEFAULT_PADDING_VERTICAL,
  },
});
