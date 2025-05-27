import {COLOR_DARK_PRIMARY} from 'constants/colors';
import {
  BORDER_RADIUS,
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {
    marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
    marginTop: DEFAULT_PADDING_VERTICAL,
    marginBottom: DEFAULT_PADDING_VERTICAL,
  },
  periodView: {
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    paddingVertical: DEFAULT_PADDING_VERTICAL / 2,
    borderColor: COLOR_DARK_PRIMARY,
    borderWidth: scalePortrait(1),
    borderRadius: BORDER_RADIUS,
    marginTop: DEFAULT_PADDING_VERTICAL / 3,
  },
  titleText: {},
  break: {
    marginTop: DEFAULT_PADDING_VERTICAL,
  },
});
