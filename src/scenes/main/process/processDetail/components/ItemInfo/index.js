import React from 'react';
import styles from './styles';
import {View, Image, Dimensions} from 'react-native';
import AppText from 'components/AppText';
import AppConfigs from 'components/index.js/configs/appConfigs';
import RenderHtml from 'react-native-render-html';
import {scaleLandscape} from '../../../../../../utils/responsive';
import {COLOR_GRAY_1} from '../../../../../../constants/colors';

const widthImage = Dimensions.get('window').width - scaleLandscape(40);

function ItemInfo({title, content, image}) {
    const END_POINT = AppConfigs.END_POINT;
    return (<View style={styles.container}>
        <AppText fit bold>
            {title}
        </AppText>
        <Image source={{uri: `${END_POINT}/` + image}} style={styles.image}/>

        {/*<AppText>{content}</AppText>*/}
        {/* <HtmlView value={dataTask?.desc} stylesheet={htmlStyle} /> */}
        <RenderHtml
            contentWidth={widthImage}
            source={{
                html: content || '<p></p>',
            }}
            baseStyle={styles.baseStyle}
            tagsStyles={{
                h1: {
                    color: COLOR_GRAY_1,
                }, h2: {
                    color: COLOR_GRAY_1,
                }, h3: {
                    color: COLOR_GRAY_1,
                }, h4: {
                    color: COLOR_GRAY_1,
                }, h5: {
                    color: COLOR_GRAY_1,
                }, h6: {
                    color: COLOR_GRAY_1,
                }, p: {
                    color: COLOR_GRAY_1,
                }, span: {
                    color: COLOR_GRAY_1,
                },
            }}
        />
    </View>);
}

export default React.memo(ItemInfo);
