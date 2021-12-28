import { FC } from 'react'
import Search from './components/Search'
import NavigationMenu from './components/NavigationMenu'
import styles from './header.module.css'

const TheHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div>
        <div className={`${styles.title} font-marker`}>
          <span>Muzikus</span>
        </div>
        <Search className={styles.search} />
      </div>
      <NavigationMenu />
    </header>
  )
}

export default TheHeader
