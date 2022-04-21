import '../styles/globals.css'
import "../styles/home.scss"
import Head from 'next/head'
import Menubar from '../component/layout/layout'
import Header from '../component/layout/header'
import Loading from '../component/Loading'
import { Router } from 'next/router'
import { useEffect,useState } from 'react'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  const [ loading,setLoading] = useState(false);

  useEffect(()=>{
    const start = () =>{
      setLoading(true);
    };
    const end = () =>{
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return() =>{
      Router.events.off("routeChangeStart",start);
      Router.events.off("routeChangeComplete",end);
      Router.events.off("routeChangeError",end);
    };

  }, []);



  return loading ? (
    <Loading/>
  ) : (
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


