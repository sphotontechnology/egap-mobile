import {FONT_FAMILY} from 'constants/appFonts';
import {COLOR_BACKGROUND, COLOR_PRIMARY} from 'constants/colors';
import {
    DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL, deviceWidth,
} from 'constants/size';
import {StyleSheet} from 'react-native';
import {scaleLandscape} from '../../../../utils/responsive';

export default StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLOR_BACKGROUND,
    }, content: {
        marginHorizontal: DEFAULT_PADDING_HORIZONTAL,
    }, button: {
        marginVertical: DEFAULT_PADDING_VERTICAL,
    }, containerStyleTextInput: {
        marginTop: 0,
    }, label: {
        color: `rgba(57, 57, 57, 1)`,
    }, textInputStyle: {
        fontFamily: FONT_FAMILY.BOLD, height: scaleLandscape(100),
    }, imageContainer: {
        width: scaleLandscape(150),
        height: scaleLandscape(184),
        marginVertical: scaleLandscape(8),
    }, listImage:{
        flexDirection: 'row',
        marginBottom: scaleLandscape(8),
    }, image: {
        width: '100%', height: '100%',
    }, containerButtonAdd: {
        flexDirection: 'row', width: '100%', justifyContent: 'space-around',
    }, buttonAdd: {
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'dashed',
        width: (deviceWidth) / 2 - scaleLandscape(20),
        height: scaleLandscape(87),
        borderColor: '#D9DDE8',
    }, iconImg: {
        width: scaleLandscape(32), height: scaleLandscape(32),
    }, textButtonAdd: {fontWeight: 'bold', color: 'rgba(131, 131, 131, 1)'
    }, iconRemove:{
        width: scaleLandscape(12),
        height: scaleLandscape(12),
        tintColor: 'white',
    }, iconRemoveContainer:{
        position: 'absolute', top: -8, right: 0,
        borderRadius: scaleLandscape(16),
        padding: scaleLandscape(4),
        backgroundColor:'red'
    }
});
