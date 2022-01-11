import { STATIC_FILES_PATH } from 'Constants/api'

export enum StaticPaths {
  image = 'images',
  audio = 'audio',
}

class FileService {
  getStaticImagePath(fileName: string) {
    return this.getStaticFilePath(StaticPaths.image, fileName)
  }

  getStaticAudioPath(fileName: string) {
    return this.getStaticFilePath(StaticPaths.audio, fileName)
  }

  private getStaticFilePath(type: StaticPaths, fileName: string) {
    return `${STATIC_FILES_PATH[type]}/${fileName}`
  }
}

export default new FileService()
