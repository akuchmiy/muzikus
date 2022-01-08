import { STATIC_FILES_PATH } from 'Constants/api'

class FileService {
  public getStaticImagePath(fileName: string) {
    return `${STATIC_FILES_PATH.images}/${fileName}`
  }
}

export default new FileService()
