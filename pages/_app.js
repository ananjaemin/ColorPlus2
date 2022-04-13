import '../styles/globals.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Colorplus2</title>
        <link rel="shortcut icon" href='./unnamed.png'/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
