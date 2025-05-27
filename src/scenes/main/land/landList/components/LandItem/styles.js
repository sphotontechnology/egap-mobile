import {COLOR_PRIMARY, COLOR_WHITE} from 'constants/colors';
import {
    BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL, DEVICE_WIDTH, ICON_SIZE,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        width: (DEVICE_WIDTH - scaleLandscape(40)),
        backgroundColor: COLOR_WHITE,
        borderRadius: BORDER_RADIUS,
        padding: DEFAULT_PADDING_VERTICAL - 4,
        alignItems: 'flex-start',
        marginBottom: scaleLandscape(8),
    }, titleText: {
        color: `rgba(12, 113, 49, 1)`,
        textAlign: 'left',
        lineHeight: scaleLandscape(21),
        fontSize: scalePortrait(20),
        width: DEVICE_WIDTH - scalePortrait(72),
        marginTop:scalePortrait(20)
    }, ownerText: {
        color: `#343333`, textAlign: 'left',
        lineHeight: scaleLandscape(21),
        fontSize: scaleLandscape(14),
        marginTop:scalePortrait(20),
    }, productText: {
        color: `#343333`, textAlign: 'left',
        lineHeight: scaleLandscape(21),
        fontSize: scaleLandscape(14),
    }, iconPlus: {
        color: COLOR_WHITE, fontSize: ICON_SIZE.LARGE,
    }, plusIconTouch: {
        width: scalePortrait(30),
        height: scalePortrait(30),
        backgroundColor: COLOR_PRIMARY,
        borderRadius: scalePortrait(36),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: scaleLandscape(16),
        right: scaleLandscape(16),
    }, vegetableImg: {
        width: scalePortrait(60), height: scalePortrait(60), marginBottom: scaleLandscape(8),
    },
});
