import axios, { AxiosError } from 'axios'
import TrackService from './trackService'
import { ApiRoutes } from 'Constants/api'
import AuthService from 'Services/api/authService'

export const axiosApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const apiService = {
  tracks: new TrackService(axiosApiInstance, ApiRoutes.tracks),
  auth: new AuthService(axiosApiInstance, ApiRoutes.auth),
}

axiosApiInstance.interceptors.response.use(
  (response) => response,
  function (error: AxiosError) {
    if (error.response?.status === 401) {
      // TODO: send refresh token to get access
      return { data: null }
    } else {
      return Promise.reject(error)
    }
  }
)

export default apiService
