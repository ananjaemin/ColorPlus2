import '../styles/globals.css'
import Head from 'next/head'
import Menubar from '../component/layout/layout'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Colorplus2</title>
        <link rel="shortcut icon" href='./unnamed.png'/>
      </Head>
      <Menubar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
