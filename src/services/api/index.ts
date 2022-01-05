import axios, { AxiosError } from 'axios'
import TrackService from './trackService'
import { ApiRoutes } from 'Constants/api'
import AuthService from 'Services/api/authService'
import BandService from 'Services/api/bandService'
import Router from 'next/router'

export const defaultApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

export const authApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
})

const apiService = {
  tracks: new TrackService(defaultApiInstance, ApiRoutes.tracks),
  bands: new BandService(defaultApiInstance, ApiRoutes.bands),
  auth: new AuthService(authApiInstance, ApiRoutes.auth),
}

defaultApiInstance.interceptors.request.use((config) => {
  const myHeaders = {
    Authorization: `Bearer ${AuthService.getToken()}`,
  }
  Object.assign(config.headers, myHeaders)

  return config
})

defaultApiInstance.interceptors.response.use(
  (response) => response,
  async function (error: AxiosError) {
    const originalRequestConfig = error.config

    if (error.response?.status === 401) {
      try {
        await apiService.auth.refresh()
      } catch (e: any) {
        Router.push('/auth')

        return { data: null }
      }

      return defaultApiInstance.request(originalRequestConfig)
    } else {
      return Promise.reject(error)
    }
  }
)

export default apiService
