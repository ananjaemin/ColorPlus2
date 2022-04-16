import '../styles/globals.css'
import "./styled/home.scss"
import styled from 'styled-components'
import Head from 'next/head'
import Menubar from '../component/layout/layout'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

//import { useRef } from 'react'

function MyApp({ Component, pageProps }) {
  // const ddd = useRef(null)
  // if (typeof window !== "undefined") {
  //   let progress = ddd.current;
  //   let totalHeight = ddd.scrollHeight - window.innerHeight;
  //   window.onscroll = function(){
  //     let progressHeight = (window.pageYOffset / totalHeight) * 100;
  //     progress.styled = progressHeight + "%";
  //   }
  
  // }
  return(
    <App>
      <div id="scrollPath"/>
      <div id="progressbar"/>
      <Head>
        <title>Colorplus2</title>
        <link rel="shortcut icon" href='./unnamed.png'/>
      </Head>
      <Menubar/>
      <Component {...pageProps} />
    </App>
  )
}




const App = styled.div`
  display:flex;
`;


export default MyApp


