export const NAMESPACE = 'scenes.auth.signIn';
import * as Yup from 'yup';

export const SIGNIN_FORM_SCHEME = Yup.object().shape({
  phone: Yup.string(),
  password: Yup.string(),
});
