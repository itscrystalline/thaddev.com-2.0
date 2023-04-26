import {Navbar} from "../../components/Navbar";
import {NextSeo} from "next-seo";
import {Countdown} from "../../components/Countdown";

export default function Index() {
  return (
    <>
      <NextSeo title="ThadDev • Countdown"/>
      <Navbar noIcons name={""} arrowTarget={"/"}/>
      <Countdown/>
    </>
  )
}