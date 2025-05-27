import {
    COLOR_BACKGROUND, COLOR_DARK_PRIMARY, COLOR_TEXT_PRIMARY, COLOR_TEXT_SECONDARY,
} from 'constants/colors';
import {
    BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape} from '../../../../../utils/responsive';

export default StyleSheet.create({
    container: {
        paddingVertical: DEFAULT_PADDING_VERTICAL,
        paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
        backgroundColor: COLOR_BACKGROUND,
        marginTop: DEFAULT_PADDING_VERTICAL,
        borderRadius: BORDER_RADIUS,
    }, HeaderTitle: {
        color: `rgba(63, 166, 68, 1)`,
    }, title: {
        color: `#838383`, marginTop: DEFAULT_PADDING_VERTICAL, lineHeight: scaleLandscape(21),
    }, value: {
        color: `#393939`,
    },
});
