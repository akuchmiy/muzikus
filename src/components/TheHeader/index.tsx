import { FC } from 'react'
import Search from './components/Search'
import styles from './header.module.css'

const TheHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.title} font-marker`}>
        <span>Muzikus</span>
      </div>
      <Search className={styles.search} />
    </header>
  )
}

export default TheHeader
