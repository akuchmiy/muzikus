import React, { FC } from 'react'
import styles from './progress.module.css'

interface ProgressProps {
  min: number
  max: number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: number
}

const Progress: FC<ProgressProps> = ({ min, max, onChange, value }) => {
  return (
    <input
      className={styles.progress}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      type='range'
    />
  )
}

export default Progress
