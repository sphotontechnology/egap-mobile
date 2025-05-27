import * as React from 'react';
import {View} from 'react-native';
import styles from './CreateLand.styles';
import AppHeader from 'components/AppHeader';
import {getString} from 'utils/i18n';
import {NAMESPACE} from './CreateLand.constants';
import TextInputBox from 'components/TextInputBox';
import AppButton from 'components/AppButton';
import AppText from 'components/AppText';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import SelectionItem from '../../../../components/SelectionItem';
import {DEFAULT_PADDING_VERTICAL} from '../../../../constants/size';
import {scaleLandscape} from '../../../../utils/responsive';

function CreateLandView({onPressBack, values, handleChange, onPressNavigateFilter, handleSubmit}) {

    return (<View style={styles.container}>
        <AppHeader
            title={getString(`${NAMESPACE}.title`)}
            onPressBack={onPressBack}
        />
        <KeyboardAwareScrollView style={styles.content}>
            <View style={{marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(30), flexDirection: 'row'}}>
                <AppText semi bold style={styles.titleText}>
                    {`Chọn chủ lô đất`}
                </AppText>
                <AppText semi bold style={{color: 'red'}}>
                    *
                </AppText>
            </View>
            <SelectionItem
                onPress={onPressNavigateFilter}
                icon={`chevron-down`}
                iconType={`Feather`}
                selection={values.owner.name ? true : false}
                title={values.owner.name ? values?.owner?.name : `Lựa chọn chủ lô đất`}
            />
            <View style={{marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(8), flexDirection: 'row'}}>
                <AppText semi bold style={styles.titleText}>
                    {getString('textInput.newLandName')}
                </AppText>
                <AppText semi bold style={{color: 'red'}}>
                    *
                </AppText>
            </View>
            <TextInputBox
                placeholder={getString('textInput.newLandName')}
                value={values.title}
                onChangeText={handleChange('title')}
            />
            <View style={{marginTop: DEFAULT_PADDING_VERTICAL, marginBottom: scaleLandscape(8), flexDirection: 'row'}}>
                <AppText semi bold style={styles.titleText}>
                    {getString('textInput.area')}
                </AppText>
                <AppText semi bold style={{color: 'red'}}>
                    *
                </AppText>
            </View>
            <TextInputBox
                placeholder={getString('textInput.area')}
                value={values.area}
                onChangeText={handleChange('area')}
                keyboardType="numeric"
            />
            <AppButton
                disabled={!values.owner.name || !values.title || !values.area}
                title={getString('button.create')}
                style={styles.buttonCreate}
                onPress={handleSubmit}
                titleStyle={styles.buttonTitleText}
            />
        </KeyboardAwareScrollView>
    </View>);
}

export default React.memo(CreateLandView);
