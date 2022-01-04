export enum ApiRoutes {
  tracks = '/tracks',
  auth = '/auth',
}

export const STATIC_FILES_PATH = {
  images: `${process.env.NEXT_PUBLIC_API_URL}/image`,
  audio: `${process.env.NEXT_PUBLIC_API_URL}/audio`,
}
