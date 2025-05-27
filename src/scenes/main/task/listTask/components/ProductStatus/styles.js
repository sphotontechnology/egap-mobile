import {COLOR_BACKGROUND, COLOR_DARK_PRIMARY, COLOR_THIRTY} from 'constants/colors';
import {
    BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        marginTop: DEFAULT_PADDING_VERTICAL,
    }, top: {
        paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
        marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
        paddingVertical: DEFAULT_PADDING_VERTICAL,
        borderRadius: BORDER_RADIUS,
        justifyContent: 'center',
        alignItems: 'center',
    }, aboveText: {
        marginBottom: DEFAULT_PADDING_VERTICAL / 3,
    }, valueText: {}, button: {
        backgroundColor: COLOR_BACKGROUND,
    }, titleStyle: {
        color: `rgba(229, 80, 57, 1)`,
    },
});
