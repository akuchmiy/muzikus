import { useEffect } from 'react'
import { useEvent, useStore } from 'effector-react'
import {
  $audio,
  setDuration,
  setIsPlaying,
  setVolume,
  setCurrentTime,
} from 'Store/audio'
import useAudio from 'Hooks/useAudio'

export function useAudioPlay(audioPath: string) {
  const audioStore = useStore($audio)
  const audio = useAudio(audioPath)

  const [setIsPlayingFn, setDurationFn, setVolumeFn, setCurrentTimeFn] =
    useEvent([setIsPlaying, setDuration, setVolume, setCurrentTime])

  function togglePlay() {
    if (audioStore.isPlaying) return setIsPlayingFn(false)

    setIsPlayingFn(true)
  }

  function changeTime(time: number) {
    if (!audio) return

    audio.currentTime = time
  }

  useEffect(() => {
    if (!audio) return

    if (audioStore.isPlaying) audio.play().catch()
    else audio.pause()
  }, [audio, audioStore.isPlaying])

  useEffect(() => {
    if (!audio) return

    setIsPlayingFn(true)

    function onMetadataLoad(audioItem: HTMLAudioElement) {
      return () => setDurationFn(audioItem.duration)
    }

    function onTimeChange(audioItem: HTMLAudioElement) {
      return () => setCurrentTimeFn(audioItem.currentTime)
    }

    const metadataListener = onMetadataLoad(audio)
    const timeListener = onTimeChange(audio)

    audio?.addEventListener('loadedmetadata', metadataListener)
    audio?.addEventListener('timeupdate', timeListener)

    return () => {
      audio?.removeEventListener('loadedmetadata', metadataListener)
      audio?.removeEventListener('loadedmetadata', timeListener)
      audio?.pause()
    }
  }, [audio, setCurrentTimeFn, setDurationFn, setIsPlayingFn])

  return {
    audio,
    ...audioStore,
    togglePlay,
    changeTime,
    changeVolume: setVolumeFn,
  }
}
