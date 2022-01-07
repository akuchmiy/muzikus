import apiService from 'Services/api'
import useFetch from 'Hooks/useFetch'
import { TrackOnly } from 'Models/Track'

export default function useTracks(
  nameMatch?: string
): [TrackOnly[], boolean, boolean] {
  const [tracks, isLoading, isError] = useFetch<TrackOnly[]>(
    [],
    apiService.tracks.findAll,
    [nameMatch]
  )
  // TODO - make match by name

  return [tracks, isLoading, isError]
}
