import { createEvent, createStore } from 'effector-next'

export const setError = createEvent<string>()

export const $error = createStore<string>('')

$error.on(setError, (_, error) => error)
