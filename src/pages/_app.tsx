import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { getPageLayout } from 'Constants/layouts'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const Layout = getPageLayout(router.route)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
