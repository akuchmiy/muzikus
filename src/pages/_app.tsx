import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '../layouts/Mainlayout'

const Layouts = {
  main: MainLayout,
}

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = Layouts['main']

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
