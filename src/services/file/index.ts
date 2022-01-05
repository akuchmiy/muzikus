import { STATIC_FILES_PATH } from 'Constants/api'

class FileService {
  public getStaticImagePath(id: string, extension: string) {
    return `${STATIC_FILES_PATH.images}/${id}.${extension}`
  }
}

export default new FileService()
