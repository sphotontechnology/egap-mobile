import {COLOR_BACKGROUND, COLOR_BACKGROUND_2, COLOR_DARK_PRIMARY, COLOR_PRIMARY, COLOR_WHITE} from 'constants/colors';
import {
    BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL, DEVICE_WIDTH,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
    }, content: {
        flexDirection: 'row', alignItems: 'center',
    }, indexView: {
        width: scalePortrait(35),
        height: scalePortrait(35),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scalePortrait(35),
        backgroundColor: COLOR_PRIMARY,
    }, right: {
        padding: scalePortrait(16),
        marginLeft: DEFAULT_PADDING_HORIZONTAL,
        borderRadius: scalePortrait(10),
        backgroundColor: COLOR_BACKGROUND,
        width: DEVICE_WIDTH - scalePortrait(95),
        marginVertical: 4
    }, indexText: {
        color: COLOR_WHITE,
    }, imageProduct: {
        width: 160, height: scalePortrait(150),  // borderWidth: scalePortrait(1),
        // color: COLOR_BORDER_BOTTOM,
        resizeMode: 'contain',
        marginBottom: scalePortrait(8),
        marginHorizontal: scalePortrait(4),
        borderRadius: 8
    }, imageContainer: {
        flexDirection: 'row', width: '100%', borderRadius: BORDER_RADIUS, marginVertical: 8,
    }, buttonDeleteTask: {
        marginTop: scaleLandscape(8),
        height: 30,
        width: 50,
        backgroundColor: '#ca3737',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }, deleteText: {
        color: '#FFFFFF', fontWeight: 'bold',
    }, containerButton: {
        width: '100%', height: 30, flexDirection: 'row-reverse',
    },imageProductContainer:{
        width: 120, height: scalePortrait(150),
    },
});
