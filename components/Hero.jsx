import React from "react";
import Typed from "typed.js";
import styles from "../styles/Hero.module.css";

export const Hero = () => {
  const spanRef = React.useRef(null);
  const typed = React.useRef(null);

  const globalSettings = {
    loop: true,
    loopCount: Infinity,
    showCursor: false,
  }

  React.useEffect(() => {
    const options = {
      strings: [
        ' I am <b><i style="background: linear-gradient(89.97deg, rgb(255, 170, 0) 1.84%, rgb(255,0,122) 102.67%) padding-box text; -webkit-text-fill-color: transparent;">Thad Choyrum</i></b>.',
        ' My nicknames are <b style="background: linear-gradient(89.97deg, rgb(255, 170, 0) 1.84%, rgb(255,0,122) 102.67%) padding-box text; -webkit-text-fill-color: transparent;">IWant2TryHard</b>,',
        ' and <b style="background: linear-gradient(89.97deg, rgb(255, 170, 0) 1.84%, rgb(255,0,122) 102.67%) padding-box text; -webkit-text-fill-color: transparent;">MyNameTsThad</b>.'
      ],
      typeSpeed: 25,
      backSpeed: 20,
      backDelay: 3000,
      ...globalSettings
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(spanRef.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  })

  return (
    <div className={styles.frame} id="main">
      <div>
        <div style={{ textAlign: "center"}}><span className={styles.main}>Hi There!</span></div>
        <div style={{ textAlign: "center"}}><span className={styles.name} ref={spanRef} /></div>
      </div>
    </div>
  )
}