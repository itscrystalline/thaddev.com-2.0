import {GalleryIntro} from "./GalleryIntro";
import styles from "../styles/Gallery.module.css";
import Image from "next/image";
import React from "react";
import {useRouter} from 'next/router'

export const Gallery = () => {
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);

  const router = useRouter()

  return (
    <>
      <GalleryIntro/>
      <div className={styles.main}>
        <b className={styles.subtitle}
           onMouseEnter={() => ref1.current.textContent += " #"}
           onMouseLeave={() => ref1.current.textContent = ref1.current.textContent.slice(0, -2)}
           onClick={() => router.replace(router.pathname + "#Hackerrank").then(() => navigator.clipboard.writeText(window.location.origin + router.asPath))}
           ref={ref1}
           id="Hackerrank"
        >Hackerrank</b>
        <div className={styles.grid}>
          <div className={styles.box + " " + styles.hackerrank}>
            <div className={styles.fill}>
              <Image src={"/images/cs_basic.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.hackerrank}>
            <div className={styles.fill}>
              <Image src={"/images/js_basic.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.hackerrank}>
            <div className={styles.fill}>
              <Image src={"/images/js_int.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.hackerrank}>
            <div className={styles.fill}>
              <Image src={"/images/java_basic.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.hackerrank}>
            <div className={styles.fill}>
              <Image src={"/images/py_basic.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
        </div>

        <b className={styles.subtitle}
           onMouseEnter={() => ref2.current.textContent += " #"}
           onMouseLeave={() => ref2.current.textContent = ref2.current.textContent.slice(0, -2)}
           onClick={() => {
             router.replace(router.pathname + "#GetLinks").then(() => navigator.clipboard.writeText(window.location.origin + router.asPath));
           }}
           ref={ref2}
           id="GetLinks"
        >GetLinks</b>
        <div className={styles.grid}>
          <div className={styles.box + " " + styles.getlinks}>
            <div className={styles.fill}>
              <Image src={"/images/getlinks1.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.getlinks}>
            <div className={styles.fill}>
              <Image src={"/images/getlinks2.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.getlinks}>
            <div className={styles.fill}>
              <Image src={"/images/getlinks3.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.getlinks}>
            <div className={styles.fill}>
              <Image src={"/images/getlinks4.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.getlinks}>
            <div className={styles.fill}>
              <Image src={"/images/getlinks5.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.getlinks}>
            <div className={styles.fill}>
              <Image src={"/images/getlinks6.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
        </div>

        <b className={styles.subtitle}
           onMouseEnter={() => ref3.current.textContent += " #"}
           onMouseLeave={() => ref3.current.textContent = ref3.current.textContent.slice(0, -2)}
           onClick={() => router.replace(router.pathname + "#VERSOHACK2022").then(() => navigator.clipboard.writeText(window.location.origin + router.asPath))}
           ref={ref3}
           id="VERSOHACK2022"
        >VERSO HACK 2022</b>
        <div className={styles.grid}>
          <div className={styles.box + " " + styles.verso}>
            <div className={styles.fill}>
              <Image src={"/images/versocert.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.verso}>
            <div className={styles.fill}>
              <Image src={"/images/verso1.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.verso}>
            <div className={styles.fill}>
              <Image src={"/images/verso3.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
          <div className={styles.box + " " + styles.verso}>
            <div className={styles.fill}>
              <Image src={"/images/verso4.jpg"} width={500} height={375} objectFit={"cover"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}