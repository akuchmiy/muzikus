import { AxiosInstance, AxiosResponse } from 'axios'
import { FullTrack, TrackOnly } from 'Models/Track'

class TrackService {
  constructor(
    private axiosInstance: AxiosInstance,
    private trackRoute: string
  ) {
    this.findAll = this.findAll.bind(this)
    this.findOne = this.findOne.bind(this)
  }

  public async findAll(): Promise<AxiosResponse<TrackOnly[]>> {
    return this.axiosInstance.get<TrackOnly[]>(`${this.trackRoute}`)
  }

  public async findOne(trackId: string): Promise<AxiosResponse<FullTrack>> {
    return this.axiosInstance.get<FullTrack>(`${this.trackRoute}/${trackId}`)
  }
}

export default TrackService
