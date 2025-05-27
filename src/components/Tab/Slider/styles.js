import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from '../../../utils/responsive';
import {COLOR_GRAY_3} from '../../../constants/colors';

export default StyleSheet.create({
    tabbar: {
        shadowOffset: {height: 0, width: 0},
        shadowColor: 'transparent',
        shadowOpacity: 0,
        elevation: 0,
        padding: 0,
        paddingHorizontal: scaleLandscape(20),
        height: scaleLandscape(50),
        borderBottomWidth: scalePortrait(1),
        borderBottomColor: '#D9DDE8',
    }, tab: {
        height: scaleLandscape(67), width: 'auto', paddingHorizontal: 4,
    }, viewLabel: {
        width: 'auto',
        alignSelf: 'flex-start',
        borderBottomWidth: scalePortrait(3),
        paddingBottom: scalePortrait(6),
        marginHorizontal: scalePortrait(4),
    },
});
