import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MusicView from '../components/MusicView'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Muzikus - The listening platform</title>
      </Head>
      <MusicView />
    </>
  )
}

export default Home
