import { FC, useState } from 'react'
import styles from './navigation.module.css'
import Repeat from '../../../helpers/Repeat'
import { NAVIGATION_LINKS } from 'Constants/header'
import Link from 'next/link'

const REPEAT_LINK_TIMES = 5

const NavigationMenu: FC = () => {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible((prevVisible) => !prevVisible)
  }

  return (
    <div className={styles.menu}>
      <button
        className={`${styles.toggle} ${visible ? styles.active : ''}`}
        onClick={handleClick}
        aria-controls={'nav'}
        aria-expanded={visible}
      >
        <span aria-hidden={true} />
      </button>
      <nav
        id={'nav'}
        className={`${styles.navigation} ${
          visible ? styles.active : ''
        } font-marker`}
        aria-hidden={!visible}
      >
        <ul>
          {NAVIGATION_LINKS.map((link) => {
            return (
              <li onClick={handleClick} key={link.href}>
                <Link href={link.href}>
                  <a>
                    <Repeat times={REPEAT_LINK_TIMES}>
                      <span>{link.text}</span>
                    </Repeat>
                  </a>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default NavigationMenu
