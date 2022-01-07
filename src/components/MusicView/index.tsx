import { FC } from 'react'
import TracksList from 'Components/Lists/TracksList'
import BandsList from 'Components/Lists/BandsList'
import SectionTitle from 'Components/UI/SectionTitle'
import useBands from 'Hooks/useBands'
import useTracks from 'Hooks/useTracks'

const MusicView: FC = () => {
  const [tracks] = useTracks()
  const [bands] = useBands()

  return (
    <>
      <div>
        <SectionTitle tag={'h2'}>Bands</SectionTitle>
        <BandsList bands={bands} />
      </div>
      <div>
        <SectionTitle tag={'h2'}>Tracks</SectionTitle>
        <TracksList tracks={tracks} />
      </div>
    </>
  )
}

export default MusicView
