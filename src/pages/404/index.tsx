import { NextPage } from 'next'
import Link from 'next/link'
import styles from './404.module.css'

const NotFound: NextPage = () => {
  return (
    <h1 className={styles.invalid}>
      404 Wrong page!
      <br />
      Visit{' '}
      <Link href={'/'}>
        <a>home</a>
      </Link>
    </h1>
  )
}

export default NotFound
