import {COLOR_BACKGROUND, COLOR_TEXT_SECONDARY} from 'constants/colors';
import {
    DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLOR_BACKGROUND,
    }, content: {
        paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    }, containerStyleTextInput: {
        marginTop: DEFAULT_PADDING_VERTICAL / 2,
    }, titleText: {
        color: `rgba(57, 57, 57, 1)`
    }, buttonCreate: {
        marginTop: DEFAULT_PADDING_VERTICAL * 2,
    }, buttonTitleText: {
        textTransform: 'uppercase',
    },
});
