import apiService from 'Services/api'
import useFetch from 'Hooks/useFetch'
import { FullTrack } from 'Models/Track'

export default function useTracks(
  nameMatch?: string
): [FullTrack[], boolean, boolean] {
  const [tracks, isLoading, isError] = useFetch<FullTrack[]>(
    [],
    apiService.tracks.findAll,
    [nameMatch]
  )
  // TODO - make match by name

  return [tracks, isLoading, isError]
}
