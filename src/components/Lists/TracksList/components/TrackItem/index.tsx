import { FC } from 'react'
import { FullTrack } from 'Models/Track'
import Image from 'next/image'
import Button from 'Components/UI/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FileService from 'Services/file'
import styles from './track.module.css'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { setTrack } from 'Store/track'

interface TrackItemProps {
  track: FullTrack
}

const TrackItem: FC<TrackItemProps> = ({ track }) => {
  const imagePath = FileService.getStaticImagePath(track.picture)

  function setPlayerTrack() {
    setTrack(track)
  }

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
        <div>{track.album.band.name}</div>
      </div>
      <div className={styles.play}>
        <Button onClick={setPlayerTrack} reversed>
          <FontAwesomeIcon icon={faPlay} />
        </Button>
      </div>
    </section>
  )
}

export default TrackItem
