import PropTypes from 'prop-types';
import React, {Component, LegacyRef, useState} from 'react';
import {StyleProp, StyleSheet} from 'react-native';
import FastImage, {
    ImageStyle,
    ResizeMode,
    Source,
} from 'react-native-fast-image';
const backgroundImg = require('assets/images/Nodata.png');

type Props = {
    style?: StyleProp<ImageStyle>;
    resizeMode: ResizeMode;
    source: Source | number;
};

class Image extends Component<Props> {
    static defaultProps: {style: {}; resizeMode: string; source: any};
    static propTypes: {style: PropTypes.Requireable<object>};
    state = {
        linkImage: this.props.source,
    };
    getMode = () => {
        const {resizeMode} = this.props;
        let resize: ResizeMode = FastImage.resizeMode.cover;
        switch (resizeMode) {
            case 'contain':
                resize = FastImage.resizeMode.contain;
                break;
            case 'stretch':
                resize = FastImage.resizeMode.stretch;
                break;
            case 'center':
                resize = FastImage.resizeMode.center;
                break;
            default:
                break;
        }
        return resize;
    };
    preload = value => {
        FastImage.preload([value]);
    };

    render() {
        const {style, source, ...rest} = this.props;
        return (
            <FastImage
                style={StyleSheet.flatten([style && style])}
                {...rest}
                source={this.state.linkImage}
                resizeMode={this.getMode()}
                onError={() =>
                    this.setState({
                        linkImage: backgroundImg,
                    })
                }
            />
        );
    }
}

Image.defaultProps = {
    style: {},
    resizeMode: 'cover',
    source: backgroundImg,
};

export default Image;
