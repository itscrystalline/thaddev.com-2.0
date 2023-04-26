import {Navbar} from "../../../components/Navbar";
import {NextSeo} from "next-seo";
import {Footer} from "../../../components/Footer";
import {useRouter} from "next/router";
import {PostViewer} from "../../../components/PostViewer";
import React from "react";

export default function Index() {
  const router = useRouter()
  const id = router.query.post;

  const [name, setName] = React.useState("Post Loading...");

  const nameUpdate = (name) => {
    setName(name);
  }

  return (
    <>
      <NextSeo title={`ThadDev • Blog: ${name}`}/>
      <Navbar noIcons name={<><p><b>Thad&apos;s Blog</b>&nbsp;:&nbsp;&nbsp;<u>{name}</u></p></>} arrowTarget={"/blog"}/>
      <PostViewer id={id} nameUpdateFunc={nameUpdate}/>
      <Footer/>
    </>
  )
}