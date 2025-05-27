import React from 'react';
import {SafeAreaView, StatusBar, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {scaleLandscape} from 'src/utils/responsive';
import {COLOR_PRIMARY} from '../../constants/colors';

interface Props {
    onRightIconPress?: () => void;
    onLeftIconPress?: () => void;
    title?: string;
    style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
    header: {
        width: '100%', justifyContent: 'center', alignItems: 'center',
    }, title: {
        width: '100%', flexDirection: 'row', justifyContent: 'space-between',
    },
});
const NavBar: React.FC<Props> = (props: Props) => {

    return (<SafeAreaView
        style={[styles.header, props.style, {
            backgroundColor: COLOR_PRIMARY,
        },]}>
        <StatusBar animated={true} barStyle={'light-content'} backgroundColor={COLOR_PRIMARY}/>
    </SafeAreaView>);
};


export default NavBar;
