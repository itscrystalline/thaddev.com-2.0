import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width"/>
      <meta content="ThadDev • Home" property="og:title"/>
      <meta content="ThadDev (IWant2TryHard)'s place on the internet." property="og:description"/>
      <meta content="https://thaddev.com" property="og:url"/>
      <meta content="https://thaddev.com/images/logoshort.svg" property="og:image"/>
      <meta content="#FFAA00" data-react-helmet="true" name="theme-color"/>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
