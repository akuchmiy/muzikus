import { AlbumOnly } from './Album'

export interface TrackOnly {
  id: string
  name: string
  picture: string
  audio: string
  text: string
  listens: number
}

export type FullTrack = TrackOnly & {
  album: AlbumOnly
}
