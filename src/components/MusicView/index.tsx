import { FC, useEffect, useState } from 'react'
import { TrackOnly } from 'Models/Track'
import apiService from 'Services/api'

const MusicView: FC = () => {
  const [tracks, setTracks] = useState<TrackOnly[]>([])

  useEffect(() => {
    ;(async function fetchTracks() {
      const tracks = await apiService.tracks.findAll()
      setTracks(tracks.data)
    })()
  }, [])

  return <span>{JSON.stringify(tracks)}</span>
}

export default MusicView
