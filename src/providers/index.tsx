import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { AuthData } from '../schemas/Models'

const Api = axios.create({
    baseURL: 'http://localhost:3000/',
    headers: { 'Content-Type': 'application/json' }
})

Api.interceptors.request.use(
    async config => {
        const res = await AsyncStorage.getItem('@AuthData')

        if (res) {

            const authData: AuthData = JSON.parse(res)

            config.headers ? config.headers.Authorization = `Bearer ${authData.token}` : ''
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default Api