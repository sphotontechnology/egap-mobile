import {COLOR_BACKGROUND} from 'constants/colors';
import {
    DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLOR_BACKGROUND,
    }, content: {
        flex: 1, paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    }, buttonCreate: {
        marginTop: DEFAULT_PADDING_VERTICAL * 2,
    }, buttonTitleText: {
        textTransform: 'uppercase',
    },
});
