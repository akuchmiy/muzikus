import { NextPage } from 'next'
import Head from 'next/head'
import { FormEvent, useState } from 'react'
import Input from 'Components/UI/Input'
import useInput from 'Hooks/useInput'
import Button from 'Components/UI/Button'
import apiService from 'Services/api'
import styles from './auth.module.css'
import Router from 'next/router'

enum AuthType {
  register = 'Register',
  login = 'Login',
}

const Titles = {
  [AuthType.register]: 'Sign up',
  [AuthType.login]: 'Log in',
}

const AuthFunctions = {
  [AuthType.register]: apiService.auth.register,
  [AuthType.login]: apiService.auth.login,
}

const Auth: NextPage = () => {
  const [authType, setAuthType] = useState<AuthType>(AuthType.register)
  const [email, setEmail, onEmailChange] = useInput('')
  const [password, setPassword, onPasswordChange] = useInput('')
  const [error, setError] = useInput('')
  // TODO: make global state error and error component

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')

    const authFunction = AuthFunctions[authType]
    try {
      const user = await authFunction({ email, password })
      // TODO: set user global state

      if (authType === AuthType.register) {
        setEmail('')
        setPassword('')
        setError('Please confirm your email and continue')
        setAuthType(AuthType.login)
      } else {
        await Router.push('/')
      }

      console.log(user)
    } catch (e: any) {
      setError(e.message)
    }
  }

  return (
    <>
      <Head>
        <title>Musicus - {authType}</title>
      </Head>
      <div className={styles.auth}>
        <div className={styles.left}>
          <h1>{Titles[authType]}</h1>
          <h4>
            Or{' '}
            {authType === AuthType.register ? (
              <button onClick={() => setAuthType(AuthType.login)}>
                {AuthType.login}
              </button>
            ) : (
              <button onClick={() => setAuthType(AuthType.register)}>
                {AuthType.register}
              </button>
            )}
          </h4>
          {error && <h4>{error}</h4>}
        </div>
        <form className={styles.right} onSubmit={handleSubmit}>
          <div>
            <Input
              label={'Enter email'}
              type={'email'}
              onChange={onEmailChange}
              value={email}
            />
            <Input
              label={'Enter password'}
              type={'password'}
              onChange={onPasswordChange}
              value={password}
            />
          </div>
          <div>
            <Button>{authType}</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Auth
