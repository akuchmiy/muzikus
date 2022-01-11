import { FC } from 'react'
import TheHeader from '../../components/TheHeader'
import styles from './main.module.css'
import Player from 'Components/Player'

const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.layout}>
      <TheHeader />
      <main className={styles.main}>
        {children}
        <Player />
      </main>
    </div>
  )
}

export default MainLayout
