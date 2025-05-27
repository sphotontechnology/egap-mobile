import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import LottieView from 'lottie-react-native';
import {LOADING_ANIM} from "../../assets/path";

interface AppLoadingProps extends ViewProps {
    isOverlay?: boolean;
}

function AppLoading(props: AppLoadingProps) {
    const {isOverlay} = props;
    const overlayStyle: StyleProp<ViewStyle> = isOverlay
        ? [
            StyleSheet.absoluteFill,
            {
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: 1000,
            },
        ]
        : [
            StyleSheet.absoluteFill,
            {
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: 1000,
            },
        ];
    return (
        <View
            {...props}
            style={[
                styles.container,
                {
                    backgroundColor: 'rgba(0,0,0,0.7)',
                },
                overlayStyle,
                props.style,
            ]}>
            <LottieView
                style={styles.loadingView}
                source={LOADING_ANIM}
                autoPlay
                loop
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loadingView: {
        width: 100,
    },
});

export default React.memo(AppLoading);
