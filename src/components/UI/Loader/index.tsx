import React, { FC } from 'react'
import styles from './loader.module.css'

interface LoaderProps {
  isLoading: boolean
}

const Loader: FC<LoaderProps> = ({ isLoading, children }) => {
  if (!isLoading) return <>{children}</>

  return (
    <div className={styles.loader}>
      <div className={styles.large} />
      <div className={styles.medium} />
      <div className={styles.small} />
    </div>
  )
}

export default Loader
