import * as React from 'react';
// import {useEffect} from 'react';
import { Image, KeyboardAvoidingView, Platform, View } from 'react-native';
import styles from './SignIn.styles';
import AppButton from 'components/AppButton';
import { SIGNIN_FORM_SCHEME } from './SignIn.constants';
import I18n, { getString } from 'utils/i18n';
import TextInputBox from 'components/TextInputBox';
import { useFormik } from 'formik';
import AppText from 'components/AppText';
import {
  IMG_LOGO_COMPANY_LOGIN,
  IMG_LOGO_LOGIN,
  IMG_LOGO_PRODUCT_LOGIN,
} from '../../../assets/path';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

function SignInView(props) {
  const { onPressSubmit, showPassword, onPressRightIcon } = props;
  const { handleChange, touched, values, errors, handleSubmit } = useFormik({
    // initialValues: {username: '0123456789', password: '123456'},
    initialValues: { username: '', password: '' },
    validationSchema: SIGNIN_FORM_SCHEME,
    validateOnChange: false,
    onSubmit: onPressSubmit,
  });

  return (
    <KeyboardAwareScrollView
      style={styles.containerScroll}
      showsVerticalScrollIndicator={false}
    >
      <Image
        // source={require('../../../assets/images/logoNew.png')}
        source={IMG_LOGO_LOGIN}
        style={styles.logoImage}
      />
      <AppText semi bold style={styles.titleText}>
        {getString('common.hello')}
      </AppText>
      <AppText style={styles.txtEgap}>{getString('common.slogan')}</AppText>
      <TextInputBox
        placeholder={I18n.t('textInput.hintPhone', '')}
        error={touched.username && errors.username}
        messageError={errors.username}
        onChangeText={handleChange('username')}
        autoCapitalize="none"
        value={values.username}
        keyboardType="number-pad"
        leftIcon={'phone'}
        textInputStyle={styles.textInputStyle}
      />
      <TextInputBox
        placeholder={I18n.t('textInput.hintPassword', '')}
        error={touched.password && errors.password}
        messageError={errors.password}
        onChangeText={handleChange('password')}
        secureTextEntry={showPassword ? false : true}
        value={values.password}
        textInputStyle={styles.textInputStyle}
        leftIcon={'lock'}
        rightIcon={showPassword ? 'eye-slash' : 'eye'}
        onPressRightIcon={onPressRightIcon}
      />
      <AppButton
        style={styles.btnLogin}
        title={I18n.t('button.signIn')}
        onPress={handleSubmit}
        titleStyle={styles.btnTitle}
      />
      <View style={styles.viewBottom}>
        <Image
          // source={require('../../../assets/images/logoNew.png')}
          source={IMG_LOGO_PRODUCT_LOGIN}
          style={styles.logoProductImage}
        />
        <Image
          // source={require('../../../assets/images/logoNew.png')}
          source={IMG_LOGO_COMPANY_LOGIN}
          style={styles.logoCompanyImage}
        />
      </View>
    </KeyboardAwareScrollView>
  );
}

export default SignInView;
