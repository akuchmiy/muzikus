import { User } from './User'
import { AlbumOnly } from './Album'

export interface BandOnly {
  id: string
  name: string
  description: string
  picture: string
}

export type FullBand = BandOnly & {
  creator: User
  albums: AlbumOnly[]
}

export type BandWithoutAlbums = Omit<FullBand, 'albums'>
export type BandWithoutUser = Omit<FullBand, 'creator'>
