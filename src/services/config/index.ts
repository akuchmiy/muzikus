class ConfigService {
  public getValue(key: string): string {
    const value = process.env[key]

    if (!value) {
      throw new Error(`Missing environment variable ${key}`)
    }

    return value
  }
}

const configService = new ConfigService()

export default configService
