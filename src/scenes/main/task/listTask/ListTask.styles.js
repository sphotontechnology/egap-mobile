import {COLOR_BACKGROUND, COLOR_BACKGROUND_2, COLOR_SECONDARY} from 'constants/colors';
import {StyleSheet} from 'react-native';
import {scalePortrait} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLOR_BACKGROUND_2,
    }, fabButton: {
        backgroundColor: `rgba(255, 202, 39, 1)`,
    }, list: {
        paddingBottom: scalePortrait(100), backgroundColor: COLOR_BACKGROUND_2,
    },
});
