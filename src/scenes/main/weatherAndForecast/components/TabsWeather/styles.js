import {FONT_SIZE} from 'constants/appFonts';
import {
  COLOR_BACKGROUND,
  COLOR_DARK,
  COLOR_TEXT_PRIMARY,
  COLOR_TEXT_SECONDARY,
} from 'constants/colors';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {},
  tab: {
    backgroundColor: COLOR_BACKGROUND,
  },
  tabBarUnderlineStyle: {
    backgroundColor: COLOR_DARK,
    height: scalePortrait(3),
  },
  tabContainer: {},
  tabBarTextStyle: {
    fontSize: FONT_SIZE.NORMAL,
    textTransform: 'uppercase',
    color: COLOR_TEXT_SECONDARY,
  },
  activeTextStyle: {
    textTransform: 'uppercase',
    color: COLOR_TEXT_PRIMARY,
  },
});
