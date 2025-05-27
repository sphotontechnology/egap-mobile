import {COLOR_SECONDARY} from 'constants/colors';
import {
    DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        flex: 1,
    }, fabButton: {
        backgroundColor: `rgba(255, 202, 39, 1)`,
    }, scrollView: {
        paddingBottom: scalePortrait(50), paddingHorizontal: scaleLandscape(20),
    }, containerListStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: scalePortrait(100),
        marginTop: DEFAULT_PADDING_VERTICAL / 3,
    },
});
