import * as React from 'react';
import {View} from 'react-native';
import styles from './AddProductToLand.styles';
import AppHeader from 'components/AppHeader';
import {getString} from 'utils/i18n';
import {NAMESPACE, } from './AddProductToLand.constants';
import TextInputBox from 'components/TextInputBox';
import AppText from 'components/AppText';
import AppButton from 'components/AppButton';
import SelectionItem from '../../../../components/SelectionItem';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {DEFAULT_PADDING_VERTICAL} from '../../../../constants/size';
import {scaleLandscape} from '../../../../utils/responsive';

function AddProductToLandView({
                                  landInfo, onPressBack, onPressNavigateFilter, values, handleChange, handleSubmit,
                              }) {
    const {area_name} = landInfo || {};
    return (<View style={styles.container}>
        <AppHeader
            title={`${getString(`${NAMESPACE}.headerTitle`)} ${area_name}`}
            onPressBack={onPressBack}
        />
        <KeyboardAwareScrollView style={styles.content}>
            <View style={{marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(30), flexDirection: 'row'}}>
                <AppText semi bold style={styles.titleText}>
                    Danh mục
                </AppText>
                <AppText semi bold style={{color: 'red'}}>
                    *
                </AppText>
            </View>
            <SelectionItem
                onPress={onPressNavigateFilter}
                icon={`chevron-down`}
                iconType={`Feather`}
                selection={values.product.name ? true : false}
                title={values.product.name ? values?.product?.name : `Vui lòng lựa chọn`}
            />
            <View style={{marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(8), flexDirection: 'row'}}>
                <AppText semi bold style={styles.titleText}>
                    {getString(`${NAMESPACE}.productTime`)}
                </AppText>
                <AppText semi bold style={{color: 'red'}}>
                    *
                </AppText>
            </View>
            <TextInputBox
                placeholder={getString('textInput.productTime')}
                value={values.time}
                onChangeText={handleChange('time')}
                containerStyle={styles.containerStyleTextInput}
            />
            <AppButton
                disabled={!values.product.name || !values.time}
                onPress={handleSubmit}
                title={getString('button.addProduct')}
                style={styles.buttonCreate}
                titleStyle={styles.buttonTitleText}
            />
        </KeyboardAwareScrollView>
    </View>);
}

export default React.memo(AddProductToLandView);
