import { COLOR_BACKGROUND, COLOR_PRIMARY, COLOR_WHITE } from 'constants/colors';
import {
    DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import { Platform, StyleSheet } from 'react-native';
import { scaleLandscape } from '../../utils/responsive';

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR_BACKGROUND, 
        alignItems: 'center', 
        flexDirection: 'row', 
        marginTop: Platform.OS === 'ios' ? 0 : 30, 
    }, iconBack: {
        color: `rgba(57, 57, 57, 1)`,
    }, touchBack: {
        paddingRight: DEFAULT_PADDING_HORIZONTAL,
        paddingVertical: scaleLandscape(12),
        paddingHorizontal: DEFAULT_PADDING_HORIZONTAL,
    }, titleText: {
        color: `rgba(57, 57, 57, 1)`, flex: 1, fontSize: 16, lineHeight: 21
    },
});
