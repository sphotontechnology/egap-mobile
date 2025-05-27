import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from '../../utils/responsive';

export default StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    }, viewBottom: {
        bottom: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: scaleLandscape(40),
        marginTop: '50%',
    }, logoProductImage: {
        height: scalePortrait(40), //scalePortrait(300)
        width: scalePortrait(125), marginRight: scaleLandscape(24), tintColor: 'rgba(255, 255, 255, 0.4)',
    }, logoCompanyImage: {
        height: scalePortrait(32), //scalePortrait(300)
        width: scalePortrait(86), alignSelf: 'center', tintColor: 'rgba(255, 255, 255, 0.4)',
    }, logoImage: {
        tintColor: 'white', height: scalePortrait(80), //scalePortrait(300)
        alignSelf: 'center', width: scalePortrait(80), marginTop: '12%', marginBottom: scaleLandscape(16),
    },appVersion: {
        alignSelf: 'center',
        color: 'rgba(255, 252, 252, 1)',
        fontSize: 16,
    },
});
