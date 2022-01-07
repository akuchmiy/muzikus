import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { User, UserDto, UserWithCredentials } from 'Models/User'

class AuthService {
  constructor(private axiosInstance: AxiosInstance, private authRoute: string) {
    this.register = this.register.bind(this)
    this.login = this.login.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  public async register(user: UserDto): Promise<User> {
    try {
      const response = await this.post<User>('register', user)
      return response.data
    } catch (e: any) {
      throw new Error('This email is already in use')
    }
  }

  public async login(user: UserDto): Promise<User> {
    try {
      const response = await this.post<UserWithCredentials>(`login`, user)

      return AuthService.saveToken(response.data)
    } catch (e: unknown) {
      throw new Error('Invalid email or password')
    }
  }

  public async refresh(): Promise<User> {
    try {
      const response = await this.post<UserWithCredentials>(`refresh`)

      return AuthService.saveToken(response.data)
    } catch (e: unknown) {
      throw new Error('Please, log in again')
    }
  }

  public static getToken() {
    return localStorage.getItem('accessToken')
  }

  private static saveToken(user: UserWithCredentials): User {
    const { accessToken, ...rest } = user

    localStorage.setItem('accessToken', accessToken)

    return rest
  }

  private async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig<any>
  ) {
    return this.axiosInstance.post<T>(`${this.authRoute}/${url}`, data, config)
  }
}

export default AuthService
