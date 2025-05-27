import {StyleSheet} from 'react-native';
import {COLOR_GRAY_1} from '../../../../../../constants/colors';
import {scaleLandscape, scalePortrait} from '../../../../../../utils/responsive';
import {FONT_FAMILY} from '../../../../../../constants/appFonts';

export default StyleSheet.create({
    container: {
        marginBottom: 10,
    }, baseStyle: {
        fontWeight: '400',
        color: COLOR_GRAY_1,
        fontSize: scalePortrait(16),
        lineHeight: scaleLandscape(24),
        fontFamily: FONT_FAMILY.REGULAR,
        textAlign: 'justify',
    },
});
