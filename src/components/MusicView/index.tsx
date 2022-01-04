import { FC, useEffect, useState } from 'react'
import { TrackOnly } from 'Models/Track'
import List from 'Components/utility/List'
import apiService from 'Services/api'
import TracksList from 'Components/Lists/TracksList'

const MusicView: FC = () => {
  const [tracks, setTracks] = useState<TrackOnly[]>([])

  useEffect(() => {
    ;(async function fetchTracks() {
      const tracks = await apiService.tracks.findAll()
      setTracks(tracks.data)
    })()
  }, [])

  return (
    <>
      <TracksList tracks={tracks} />
    </>
  )
}

export default MusicView
