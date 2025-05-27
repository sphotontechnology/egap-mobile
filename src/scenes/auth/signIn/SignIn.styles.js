import {Platform, StyleSheet} from 'react-native';
import {
    DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {COLOR_BACKGROUND} from 'constants/colors';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLOR_BACKGROUND,
    }, containerScroll: {
        flex: 1, paddingHorizontal: DEFAULT_PADDING_HORIZONTAL, backgroundColor: COLOR_BACKGROUND,
    }, btnLogin: {
        marginTop: scaleLandscape(80),
    }, titleText: {
        color: `rgba(52, 51, 51, 1)`,
        fontSize: scalePortrait(20),
        textAlign: 'left',
        marginTop: '2%',
        lineHeight: scaleLandscape(30),
    }, logoImage: {
        height: scalePortrait(60), //scalePortrait(300)
        alignSelf: 'flex-start', width: scalePortrait(60), marginTop: Platform.OS === 'ios' ? '32%' : '22%',
    }, btnTitle: {
        textTransform: 'capitalize',
    }, textInputStyle: {}, txtEgap: {
        fontSize: scalePortrait(16),
        textAlign: 'left',
        marginTop: scalePortrait(8),
        color: 'rgba(160, 160, 160, 1)',
        lineHeight: scaleLandscape(24),
        marginBottom: 10
    }, viewBottom: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: scaleLandscape(40),
        marginTop: '32%',
    }, logoProductImage: {
        height: scalePortrait(40), //scalePortrait(300)
        width: scalePortrait(125), marginRight: scaleLandscape(24),
    }, logoCompanyImage: {
        height: scalePortrait(32), //scalePortrait(300)
        width: scalePortrait(86), alignSelf: 'center',
    },
});
