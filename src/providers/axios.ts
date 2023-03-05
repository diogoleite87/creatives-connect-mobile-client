import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import { AuthData } from "../schemas/Models"

const axiosLink = axios.create({
  baseURL: "http://localhost:3000/graphql",
  headers: { "Content-Type": "application/json" }
})

axiosLink.interceptors.request.use(
  async config => {
    const res = await AsyncStorage.getItem("@AuthData")

    if (res) {
      const authData: AuthData = JSON.parse(res)

      config.headers
        ? (config.headers.Authorization = `Bearer ${authData.token}`)
        : ""
    }

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosLink
