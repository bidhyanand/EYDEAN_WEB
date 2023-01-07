import HeaderState from '../components/context/HeaderState'
// import CustomCursor from '../components/customCursor/cursor'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <HeaderState>
    <Layout>
      {/* <CustomCursor /> */}
      <Component {...pageProps} />
    </Layout>
    </HeaderState>
  )
}

export default MyApp
