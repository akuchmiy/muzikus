import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Muzikus - The listening platform</title>
      </Head>
      <div>
        <h1>Muzikus</h1>
        <Link href={'/'}>
          <a>Home</a>
        </Link>
      </div>
    </>
  )
}

export default Home
