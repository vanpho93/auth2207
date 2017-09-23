import { AsyncStorage } from 'react-native';

export const saveToken = (token) => {
    return AsyncStorage.setItem('TOKEN', token);
}

export const getToken = () => {
    return AsyncStorage.getItem('TOKEN')
}


