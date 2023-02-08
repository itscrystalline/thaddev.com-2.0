import {Navbar} from "../../components/Navbar";
import {NextSeo} from "next-seo";
import {Footer} from "../../components/Footer";
import {Blog} from "../../components/Blog";

export default function Index() {
  return (
    <>
      <NextSeo title="ThadDev • Blog"/>
      <Navbar noIcons name={"Blog"} arrowTarget={"/"}/>
      <Blog/>
      <Footer/>
    </>
  )
}