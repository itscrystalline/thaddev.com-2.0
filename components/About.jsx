import styles from "../styles/About.module.css";
import React from "react";

export const About = () => {
  // use intersection observer to trigger animation upon entering viewport
  const [isIntersecting, setIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  React.useEffect(() => {
    const refCopy = ref.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => {
      observer.unobserve(refCopy);
    };
  });

  return (
    <div className={styles.box} ref={ref} id="about">
      <h1 className={styles.header + " " + (isIntersecting ? styles.show : styles.hidden)}>Who am I?</h1>
      <div className={styles.stagger + " " + (isIntersecting ? styles.show : styles.hidden) + " " + styles.text}>
        I am a {getAge(Date.now())} year old from Thailand, currently studying in a higher education &#40;อุดมศึกษา&#41; at KOSEN-KMITL in Bangkok.
        <br/>
        I have a passion for programming since I was 9, So naturally I have interest in anything computer-related.
        <br/>
        I like games (I am a Minecraft modder and player) and strive for good looking UIs.
        <br/>
        <i>also loves to cosplay being a sysadmin :)</i>
        <br/>
        <u style={{color: "lightblue"}}><code>IWant2TryHard#1702</code> on Discord. I do not have an &ldquo;official&rdquo; account.</u>
      </div>
    </div>
  )
}

const getAge = (unixTimeNow) => {
  //get my age from my birthday of 04/06/2008 10 AM (dd/mm/yyyy) GMT+7 in unix time
  const birthday = 1212550800000;
  return Math.floor((unixTimeNow - birthday) / 31536000000);
}