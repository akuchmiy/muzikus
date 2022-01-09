import { FC } from 'react'
import { TrackOnly } from 'Models/Track'
import Image from 'next/image'
import Button from 'Components/UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FileService from 'Services/file'
import styles from './track.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

interface TrackItemProps {
  track: TrackOnly
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const imagePath = FileService.getStaticImagePath(track.picture)

  return (
    <section className={styles.track}>
      <div className={styles.image}>
        <Image
          className={styles.innerImg}
          src={imagePath}
          alt={''}
          layout={'fill'}
          sizes={'50vw'}
          unoptimized={true}
        />
      </div>
      <div className={styles.description}>
        <h4 className={styles.name}>{track.name}</h4>
        <div>{track.text}</div>
      </div>
      <div className={styles.play}>
        <Button reversed>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
    </section>
  )
}

export default TrackItem
