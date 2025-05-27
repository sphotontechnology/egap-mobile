import {StyleSheet} from 'react-native';
import {
    COLOR_BACKGROUND, COLOR_GRAY_ICON, COLOR_WHITE,
} from 'constants/colors';
import {BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        height: "100%", flexDirection: "row", justifyContent: 'center', alignItems: 'center'
    }, icon: {
        height: scalePortrait(16), width: scalePortrait(16), marginRight: scaleLandscape(2)
    }, valueStyle: {
        color: COLOR_WHITE, fontSize: scalePortrait(12), lineHeight: scaleLandscape(18)
    }
});
