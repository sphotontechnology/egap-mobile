import {COLOR_BACKGROUND, COLOR_DARK_PRIMARY, COLOR_WHITE} from 'constants/colors';
import {
    BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL, DEVICE_WIDTH,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        width: (DEVICE_WIDTH - scaleLandscape(60)) / 2,
        height: scalePortrait(200),
        backgroundColor: COLOR_WHITE,
        marginTop: DEFAULT_PADDING_VERTICAL / 2,
        borderRadius: BORDER_RADIUS,
        alignItems: 'flex-start',
        padding: scaleLandscape(16),
    }, image: {
        width: scalePortrait(60),
        height: scalePortrait(60),
        borderRadius: BORDER_RADIUS,
        borderColor: COLOR_DARK_PRIMARY,
        borderWidth: scalePortrait(1),
        marginBottom: scaleLandscape(4),
    }, right: {
        marginLeft: DEFAULT_PADDING_HORIZONTAL,
    }, nameTxt: {
        color: `rgba(12, 113, 49, 1)`, lineHeight: scaleLandscape(21),
    },stageTxt: {
        color: `#A0A0A0`, lineHeight: scaleLandscape(21), height: scaleLandscape(42),
    },
});
