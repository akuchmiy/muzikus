import axios from 'axios'
import TrackService from './trackService'
import { TRACKS_ENDPOINT } from 'Constants/api'

export const axiosApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const apiService = {
  tracks: new TrackService(axiosApiInstance, TRACKS_ENDPOINT),
}

export default apiService
