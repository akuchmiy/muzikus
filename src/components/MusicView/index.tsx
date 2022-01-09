import { FC, useMemo } from 'react'
import TracksList from 'Components/Lists/TracksList'
import BandsList from 'Components/Lists/BandsList'
import SectionTitle from 'Components/UI/SectionTitle'
import Loader from 'Components/UI/Loader'
import useBands from 'Hooks/useBands'
import useTracks from 'Hooks/useTracks'

const MusicView: FC = () => {
  const [tracks, tracksLoading] = useTracks()
  const [bands, bandsLoading] = useBands()

  const isLoading = useMemo(() => {
    return tracksLoading && bandsLoading
  }, [tracksLoading, bandsLoading])

  return (
    <Loader isLoading={isLoading}>
      <div>
        <SectionTitle tag={'h2'}>Bands</SectionTitle>
        <BandsList bands={bands} />
      </div>
      <div>
        <SectionTitle tag={'h2'}>Tracks</SectionTitle>
        <TracksList tracks={tracks} />
      </div>
    </Loader>
  )
}

export default MusicView
