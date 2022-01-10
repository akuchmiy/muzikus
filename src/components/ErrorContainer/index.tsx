import React, { FC, useEffect, useState } from 'react'
import { useEvent, useStore } from 'effector-react'
import { $error, setError } from 'Store/error'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'
import styles from './error.module.css'

const HIDE_ERROR_TIMEOUT = 5000

const ErrorContainer: FC = () => {
  const errorStore = useStore<string>($error)
  const isHidden = !errorStore
  const setErrorStore = useEvent(setError)

  useEffect(() => {
    const timeoutId = setTimeout(() => setErrorStore(''), HIDE_ERROR_TIMEOUT)

    return () => clearTimeout(timeoutId)
  }, [errorStore, setErrorStore])

  return (
    <div
      className={`${styles.error} ${isHidden ? styles.hidden : ''}`}
      aria-hidden={isHidden}
    >
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faExclamationTriangle} />
      </div>
      <div className={styles.text}>{errorStore}</div>
    </div>
  )
}

export default ErrorContainer
