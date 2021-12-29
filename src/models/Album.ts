import { TrackOnly } from './Track'
import { BandOnly } from './Band'

export interface AlbumOnly {
  id: string
  name: string
  picture: string
}

export type FullAlbum = AlbumOnly & {
  band: BandOnly
  tracks: TrackOnly[]
}

export type AlbumWithoutTracks = Omit<FullAlbum, 'tracks'>
export type AlbumWithoutBand = Omit<FullAlbum, 'band'>
