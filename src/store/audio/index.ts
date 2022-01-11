import { createEvent, createStore } from 'effector-next'

interface AudioStore {
  isPlaying: boolean
  duration: number
  currentTime: number
  volume: number
}

export const $audio = createStore<AudioStore>({
  isPlaying: false,
  duration: 0,
  currentTime: 0,
  volume: 50,
})

export const setIsPlaying = createEvent<boolean>()
export const setDuration = createEvent<number>()
export const setCurrentTime = createEvent<number>()
export const setVolume = createEvent<number>()

$audio.on(setIsPlaying, (state, isPlaying) => ({ ...state, isPlaying }))
$audio.on(setDuration, (state, duration) => ({ ...state, duration }))
$audio.on(setCurrentTime, (state, currentTime) => ({ ...state, currentTime }))
$audio.on(setVolume, (state, volume) => ({ ...state, volume }))
