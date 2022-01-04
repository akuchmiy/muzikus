import { FC } from 'react'
import Image from 'next/image'
import { TrackOnly } from 'Models/Track'
import { STATIC_FILES_PATH } from 'Constants/api'
import Button from 'Components/UI/Button'
import styles from './track.module.css'

interface TrackItemProps {
  track: TrackOnly
}

const DEFAULT_IMAGE_SIZE = 100

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const imagePath = `${STATIC_FILES_PATH.images}/${track.id}.${track.picture}`

  return (
    <section className={styles.track}>
      <div className={styles.image}>
        <Image
          src={imagePath}
          alt={''}
          width={DEFAULT_IMAGE_SIZE}
          height={DEFAULT_IMAGE_SIZE}
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
