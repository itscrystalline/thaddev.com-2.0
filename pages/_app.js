import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link
        rel="prefetch"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
      />
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
