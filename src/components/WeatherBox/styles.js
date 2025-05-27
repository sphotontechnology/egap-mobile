import {COLOR_PRIMARY} from 'constants/colors';
import {Platform, StyleSheet} from 'react-native';
import {scaleLandscape} from 'utils/responsive';

export default StyleSheet.create({
    container: {
        backgroundColor: COLOR_PRIMARY,
        width: '100%',
        paddingHorizontal: scaleLandscape(16),
        paddingVertical: scaleLandscape(12),

    }, touchView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
