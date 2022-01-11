import { createEvent, createStore } from 'effector-next'
import { FullTrack } from 'Models/Track'

export const $track = createStore<FullTrack | null>(null)

export const setTrack = createEvent<FullTrack>()

$track.on(setTrack, (_, track) => track)
