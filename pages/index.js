import {Navbar} from "../components/Navbar";
import {Hero} from "../components/Hero";
import {About} from "../components/About";
import {NextSeo} from "next-seo";
import {River} from "../components/River";
import {FootStuff} from "../components/FootStuff";
import {Footer} from "../components/Footer";

export default function Home() {
  return (
    <>
      <NextSeo title="ThadDev • Home" description="ThadDev (IWant2TryHard)'s place on the internet." canonical="https://thaddev.com" />
      <Navbar/>
      <Hero/>
      <About/>
      <River/>
      <Footer/>
      <FootStuff/>
    </>
  )
}
