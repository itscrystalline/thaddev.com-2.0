import {Navbar} from "../../components/Navbar";
import {NextSeo} from "next-seo";
import {Footer} from "../../components/Footer";
import {Gallery} from "../../components/Gallery";

export default function Index() {
  return (
    <>
      <NextSeo title="ThadDev • Gallery"/>
      <Navbar noIcons name={"Gallery"} arrowTarget={"/"}/>
      <Gallery/>
      <Footer/>
    </>
  )
}
