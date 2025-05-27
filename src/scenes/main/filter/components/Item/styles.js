import {COLOR_TEXT_SECONDARY} from 'constants/colors';
import {DEFAULT_PADDING_HORIZONTAL} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        height: scalePortrait(24),
        width: '100%',
        marginBottom: scaleLandscape(24),
    }, itemViewFinaly: {
        borderBottomWidth: scaleLandscape(1), borderBottomColor: COLOR_TEXT_SECONDARY,
    }, textItem: {
        color: `rgba(57, 57, 57, 1)`, lineHeight: scaleLandscape(24), marginLeft: scaleLandscape(16),
    },
});
