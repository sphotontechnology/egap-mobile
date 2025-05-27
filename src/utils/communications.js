import {Linking} from 'react-native';
import {showAlertNotification} from './alert';

export async function openURL(url) {
  try {
    await Linking.openURL(url);
  } catch (error) {
    showAlertNotification({message: error.message});
  }
}
