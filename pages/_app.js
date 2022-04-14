import '../styles/globals.css'
import "./styled/home.scss"
import styled from 'styled-components'
import Head from 'next/head'
import Menubar from '../component/layout/layout'

function MyApp({ Component, pageProps }) {

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


if (typeof window !== "undefined") {
  let progress = document.getElementById('progressbar');
  let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
  }

}



export default MyApp

const App = styled.div`
  display:flex;
`;

