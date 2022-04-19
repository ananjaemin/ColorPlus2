import '../styles/globals.css'
import "./styled/home.scss"
import styled from 'styled-components'
import Head from 'next/head'
import Menubar from '../component/layout/layout'
import Header from '../component/layout/header'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {

  return(
    <div>
      <div id="progressbar"/>
      <Head>
        <title>Colorplus2</title>
        <link rel="shortcut icon" href='./unnamed.png'/>
      </Head>
      <Menubar/>
      <Header/>
      <Component {...pageProps} />
    </div>
  )
}






export default MyApp


