import {StyleSheet} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';
import {DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL} from '../../../../constants/size';

export default StyleSheet.create({
    container: {
        flex: 1,
    }, list: {
        paddingBottom: scaleLandscape(50),
    }, scrollView: {
        paddingBottom: scaleLandscape(50), paddingHorizontal: scaleLandscape(20),
    }, containerListStyle: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: scaleLandscape(100),
        marginTop: DEFAULT_PADDING_VERTICAL / 3,
    },
});
