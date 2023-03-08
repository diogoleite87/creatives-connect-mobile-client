import { Platform } from 'react-native';

function base64ToImage(base64String: string): string {
    const uriPrefix = Platform.OS === 'android' ? 'file://' : '';
    return `${uriPrefix}data:image/jpeg;base64,${base64String}`;
}