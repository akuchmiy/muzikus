import { FC } from 'react'
import styles from './nolayout.module.css'

const NoLayout: FC = ({ children }) => {
  return <main className={styles.main}>{children}</main>
}

export default NoLayout
