import {
  COLOR_DARK_PRIMARY,
  COLOR_GRAY_ICON,
  COLOR_TEXT_PRIMARY,
} from 'constants/colors';
import {
  BORDER_RADIUS,
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
  ICON_SIZE,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: COLOR_DARK_PRIMARY,
    borderWidth: scalePortrait(1),
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    height: scalePortrait(50),
  },
  iconDown: {
    color: COLOR_GRAY_ICON,
    fontSize: ICON_SIZE.SMALL,
  },
  titleText: {
    marginBottom: DEFAULT_PADDING_VERTICAL / 3,
    color: COLOR_TEXT_PRIMARY,
  },
  labelText: {},
});
