import { AxiosInstance, AxiosResponse } from 'axios'
import { BandOnly, FullBand } from 'Models/Band'

class BandService {
  constructor(private axiosInstance: AxiosInstance, private bandRoute: string) {
    this.findAll = this.findAll.bind(this)
    this.findOne = this.findOne.bind(this)
  }

  public async findAll(): Promise<AxiosResponse<BandOnly[]>> {
    return this.axiosInstance.get<BandOnly[]>(`${this.bandRoute}`)
  }

  public async findOne(bandId: string): Promise<AxiosResponse<FullBand>> {
    return this.axiosInstance.get<FullBand>(`${this.bandRoute}/${bandId}`)
  }
}

export default BandService
