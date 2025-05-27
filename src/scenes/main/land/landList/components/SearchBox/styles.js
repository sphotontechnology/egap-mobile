import {FONT_FAMILY, FONT_SIZE} from 'constants/appFonts';
import {
    COLOR_BACKGROUND,
} from 'constants/colors';
import {
    BORDER_RADIUS, DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL,
} from 'constants/size';
import {StyleSheet, Platform} from 'react-native';
import {scaleLandscape, scalePortrait} from 'utils/responsive';
import {appShadow} from 'utils/styleHelper';

export default StyleSheet.create({
    container: {
        marginHorizontal: DEFAULT_PADDING_HORIZONTAL / 2,
        marginVertical: DEFAULT_PADDING_VERTICAL / 2,
        paddingVertical: Platform.OS === 'ios' ? scaleLandscape(14) : scaleLandscape(6),
        paddingHorizontal: DEFAULT_PADDING_HORIZONTAL / 2,
        backgroundColor: COLOR_BACKGROUND,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: BORDER_RADIUS,
        borderColor: '#cccccc',
        borderWidth: scalePortrait(0.5),
    }, left: {
        flexDirection: 'row', flex: 1, alignItems: 'center',
    }, right: {
        flexDirection: 'row',
    }, verticalDash: {
        width: scalePortrait(1), backgroundColor: `#D9DDE8`, marginHorizontal: DEFAULT_PADDING_HORIZONTAL / 2,
    }, iconFilter: {
        color: `#0C7131`, fontSize: scalePortrait(24),
    }, iconSearch: {
        color: `#2C3E50`, fontSize: scalePortrait(16),
    }, textInput: {
        fontSize: FONT_SIZE.FIT, fontFamily: FONT_FAMILY.REGULAR, flex: 1, marginLeft: DEFAULT_PADDING_HORIZONTAL / 3,
    },
});
