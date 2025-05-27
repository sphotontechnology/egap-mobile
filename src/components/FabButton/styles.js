import {COLOR_PRIMARY, COLOR_WHITE} from 'constants/colors';
import {
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
  ICON_SIZE,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';
import {appShadow} from 'utils/styleHelper';

export default StyleSheet.create({
  shadowView: {
    backgroundColor: COLOR_PRIMARY,
    ...appShadow.shadow,
    height: scalePortrait(48),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scalePortrait(48),
    position: 'absolute',
    bottom: DEFAULT_PADDING_VERTICAL,
    right: DEFAULT_PADDING_HORIZONTAL,
    zIndex: 9999,
    alignSelf: 'flex-end',
  },
  container: {
    height: scalePortrait(48),
    width: scalePortrait(48),
    borderRadius: scalePortrait(48),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: COLOR_WHITE,
    fontSize: ICON_SIZE.LARGE,
  },
});
