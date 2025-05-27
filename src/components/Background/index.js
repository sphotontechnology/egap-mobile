import React from 'react';
import {Image, View} from 'react-native';
import {IMG_SPLASH} from '../../assets/path';
import {deviceHeight, deviceWidth} from '../../constants/size';

export type BackgroundProps = React.ComponentProps<typeof View>;
const Background: React.FC<BackgroundProps> = props => {
    return (<View {...props}>
        <Image
            source={IMG_SPLASH}
            style={{
                position: 'absolute', width: deviceWidth, height: deviceHeight,
            }}
            resizeMode={'cover'}
        />
    </View>);
};

export default Background;
