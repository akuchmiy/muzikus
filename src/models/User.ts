export interface User {
  id: string
  email: string
  confirmed: boolean
}

export type UserWithCredentials = User & {
  accessToken: string
}

export interface UserDto {
  email: string
  password: string
}
