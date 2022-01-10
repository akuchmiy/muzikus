import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { getPageLayout } from 'Constants/layouts'
import { withHydrate } from 'effector-next'
import ErrorContainer from 'Components/ErrorContainer'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const Layout = getPageLayout(router.route)

  return (
    <Layout>
      <Component {...pageProps} />
      <ErrorContainer />
    </Layout>
  )
}

const enhance = withHydrate()

export default enhance(MyApp)
