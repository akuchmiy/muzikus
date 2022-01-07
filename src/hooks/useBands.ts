import apiService from 'Services/api'
import useFetch from 'Hooks/useFetch'
import { BandOnly } from 'Models/Band'

export default function useBands(
  nameMatch?: string
): [BandOnly[], boolean, boolean] {
  const [bands, isLoading, isError] = useFetch<BandOnly[]>(
    [],
    apiService.bands.findAll,
    [nameMatch]
  )
  // TODO - make match by name

  return [bands, isLoading, isError]
}
