import React, { FC, useMemo } from 'react'
import Image from 'next/image'
import Progress from 'Components/UI/Progress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons'
import { useStore } from 'effector-react'
import { useAudioPlay } from 'Hooks/useAudioPlay'
import { $track } from 'Store/track'
import FileService from 'Services/file'
import styles from './player.module.css'

const Player: FC = () => {
  const track = useStore($track)
  const isVisible = track != null

  const [imagePath, audioPath] = useMemo(() => {
    const imagePath = track?.picture
      ? FileService.getStaticImagePath(track.picture)
      : ''
    const audioPath = track?.audio
      ? FileService.getStaticAudioPath(track.audio)
      : ''
    return [imagePath, audioPath]
  }, [track])

  const { isPlaying, currentTime, volume, duration, togglePlay, changeTime } =
    useAudioPlay(audioPath)

  function onTimeChange(e: React.ChangeEvent<HTMLInputElement>) {
    changeTime(+e.currentTarget.value)
  }

  return (
    <div className={`${styles.player} ${!isVisible ? styles.hidden : ''}`}>
      <div className={styles.container}>
        <div className={styles.image}>
          {imagePath && <Image src={imagePath} layout={'fill'} alt={''} />}
        </div>
        <div className={'even-columns'}>
          <div className={styles.description}>
            <div>
              <span className={'font-marker'}>{track?.name}</span>
              <span>{track?.album.band.name}</span>
            </div>
            <div className={styles.slider}>
              <Progress
                min={0}
                max={duration}
                value={currentTime}
                onChange={onTimeChange}
              />
            </div>
          </div>
          <div className={styles.controls}>
            <button onClick={togglePlay}>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
            </button>
            Time {currentTime} Volume {volume}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
