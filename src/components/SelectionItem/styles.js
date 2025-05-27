import {COLOR_TEXT_SECONDARY} from 'constants/colors';
import {DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: scalePortrait(40),
        marginBottom: scaleLandscape(4),
        borderBottomWidth: scaleLandscape(1),
        borderBottomColor: '#E3E5E5',
        paddingHorizontal: scaleLandscape(12),
    }, iconRight: {
        color: `#A0A0A0`,
    }, titleTxt: {
        color: `#A0A0A0`, lineHeight: scaleLandscape(24), fontWeight: `bold`,
    },
});
