import { Dimensions, StyleSheet } from 'react-native';
import { scaleLandscape, scalePortrait } from 'utils/responsive';
import { FONT_SIZE, FONT_FAMILY } from 'constants/appFonts';
import {
  COLOR_BACKGROUND,
  COLOR_TEXT_PRIMARY,
  COLOR_GRAY_TEXT,
  COLOR_DARK_PRIMARY,
} from 'constants/colors';
import {
  BORDER_RADIUS,
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
  ICON_SIZE,
} from 'constants/size';

export default StyleSheet.create({
  container: {
    backgroundColor: COLOR_BACKGROUND,
    height: scalePortrait(50),
    marginTop: DEFAULT_PADDING_VERTICAL,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    fontSize: FONT_SIZE.FIT,
    fontFamily: FONT_FAMILY.BOLD,
    color: COLOR_TEXT_PRIMARY,
    flexGrow: 1,
  },
  txtError: {
    alignSelf: 'flex-start',
    textAlign: 'left',
    color: 'red',
    fontSize: FONT_SIZE.SMALL - 2,
    fontStyle: 'italic',
    paddingHorizontal: scalePortrait(5),
    marginBottom: -scalePortrait(15),
  },
  heightWithError: {
    height: scalePortrait(60),
  },
  icon: {
    fontSize: ICON_SIZE.SMALL,
    color: 'rgba(131, 131, 131, 1)',
  },
  label: {
    color: COLOR_TEXT_PRIMARY,
    fontSize: FONT_SIZE.SMALL,
  },
  underline: { height: 1, backgroundColor: 'black', width: '100%' },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    borderBottomWidth: scalePortrait(1),
    borderColor: COLOR_DARK_PRIMARY,
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    width: Dimensions.get('screen').width - DEFAULT_PADDING_HORIZONTAL,
  },
});
