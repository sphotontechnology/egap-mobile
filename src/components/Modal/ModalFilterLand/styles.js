import {
  COLOR_GRAY_ICON,
  COLOR_SECONDARY,
  COLOR_TEXT_THIRDLY,
  COLOR_WHITE,
} from 'constants/colors';
import {
  BORDER_RADIUS,
  DEFAULT_PADDING_HORIZONTAL,
  DEFAULT_PADDING_VERTICAL,
  ICON_SIZE,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {COLOR_SEPARATOR} from 'scenes/main/account/Account.constants';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
  container: {
    paddingVertical: DEFAULT_PADDING_VERTICAL,
    width: scalePortrait(345),
    backgroundColor: 'white',
    borderRadius: BORDER_RADIUS,
    paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
  },
  modal: {
    marginLeft: 0,
    height: '100%',
    marginVertical: 0,
    width: '100%',
    alignItems: 'center',
  },
  text: {
    color: COLOR_TEXT_THIRDLY,
  },
  line: {
    borderWidth: scalePortrait(1),
    borderColor: COLOR_SEPARATOR,
    marginHorizontal: scalePortrait(15),
  },
  cancelButtonContainer: {
    backgroundColor: COLOR_WHITE,
    height: scalePortrait(40),
    borderRadius: scalePortrait(20),
    marginVertical: scalePortrait(10),
  },
  button: {
    padding: DEFAULT_PADDING_HORIZONTAL,
  },
  buttonsFooter: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  buttonText: {
    color: COLOR_SECONDARY,
    textTransform: 'uppercase',
  },
  listOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: DEFAULT_PADDING_VERTICAL,
  },
  item: {
    width: scalePortrait(150),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: DEFAULT_PADDING_VERTICAL,
  },
  selectedIcon: {
    color: COLOR_SECONDARY,
    fontSize: ICON_SIZE.NORMAL,
  },
  blankIcon: {
    color: COLOR_GRAY_ICON,
    fontSize: ICON_SIZE.NORMAL,
  },
  optionLabelText: {
    marginLeft: DEFAULT_PADDING_HORIZONTAL / 2,
  },
});
