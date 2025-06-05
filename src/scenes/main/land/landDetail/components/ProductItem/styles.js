import {
  COLOR_DARK_PRIMARY,
  COLOR_THIRTY,
  COLOR_WHITE,
} from 'constants/colors';
import {
  BORDER_RADIUS,
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
  DEVICE_WIDTH,
} from 'constants/size';
import { StyleSheet } from 'react-native';
import { scaleLandscape, scalePortrait } from 'utils/responsive';

export default StyleSheet.create({
  container: {
    width: DEVICE_WIDTH - scaleLandscape(40),
    backgroundColor: COLOR_WHITE,
    marginTop: scaleLandscape(16),
    borderRadius: BORDER_RADIUS,
    alignItems: 'flex-start',
    padding: scaleLandscape(16),
    marginHorizontal: scaleLandscape(20),
  },
  titleText: {
    color: '#A5CE36',
    lineHeight: scaleLandscape(21),
    width: DEVICE_WIDTH - scaleLandscape(40),
  },
  dateText: {
    alignSelf: 'flex-start',
    marginTop: scaleLandscape(9),
  },
  statusText: {
    paddingVertical: DEFAULT_PADDING_VERTICAL / 2,
    textDecorationLine: 'underline',
  },
  image: {
    width: scalePortrait(60),
    height: scalePortrait(60),
    borderRadius: BORDER_RADIUS,
    marginBottom: scaleLandscape(4),
  },
  nameText: {
    color: '#0C7131',
    lineHeight: scaleLandscape(21),
  },
});
