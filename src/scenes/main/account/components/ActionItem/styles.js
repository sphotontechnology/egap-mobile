import {COLOR_TEXT_SECONDARY} from 'constants/colors';
import {DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: scalePortrait(50),
        marginBottom: scaleLandscape(4),
    }, left: {
        flexDirection: 'row', alignItems: 'center',
    }, iconLeft: {
        color: COLOR_TEXT_SECONDARY, marginRight: DEFAULT_PADDING_HORIZONTAL,
    }, rightTxt: {
        color: `rgba(165, 206, 54, 1)`,
    }, titleTxt: {
        color: `rgba(96, 96, 96, 1)`,
    },
});
