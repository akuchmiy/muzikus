import { createEvent, createStore } from 'effector-next'
import { User } from 'Models/User'

export const setUser = createEvent<User>()

export const $user = createStore<User>({ id: '', email: '', confirmed: false })

$user.on(setUser, (_, user) => user)
