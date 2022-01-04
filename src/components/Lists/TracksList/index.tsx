import { FC } from 'react'
import { TrackOnly } from 'Models/Track'
import List from 'Components/utility/List'
import TrackItem from 'Components/Lists/TracksList/components/TrackItem'
import styles from './tracks.module.css'

interface TrackListProps {
  tracks: TrackOnly[]
}

const TracksList: FC<TrackListProps> = ({ tracks }) => {
  return (
    <List<TrackOnly>
      list={tracks}
      style={styles.list}
      render={(track) => {
        return <TrackItem track={track} />
      }}
    />
  )
}

export default TracksList
