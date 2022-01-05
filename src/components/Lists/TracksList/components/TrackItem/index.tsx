import { FC } from 'react'
import Image from 'next/image'
import { TrackOnly } from 'Models/Track'
import Button from 'Components/UI/Button'
import styles from './track.module.css'
import FileService from 'Services/file'

interface TrackItemProps {
  track: TrackOnly
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const imagePath = FileService.getStaticImagePath(track.id, track.picture)

  return (
    <section className={styles.track}>
      <div className={styles.image}>
        <Image
          className={styles.innerImg}
          src={imagePath}
          alt={''}
          layout={'fill'}
        />
      </div>
      <div className={styles.description}>
        <h4 className={styles.name}>{track.name}</h4>
        <div>{track.text}</div>
      </div>
      <div className={styles.play}>
        <Button reversed>Play</Button>
      </div>
    </section>
  )
}

export default TrackItem
