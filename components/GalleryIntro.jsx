import styles from "../styles/About.module.css";
import React from "react";

export const GalleryIntro = () => {
  // use intersection observer to trigger animation upon entering viewport
  const [isIntersecting, setIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  });

  return (
    <div className={styles.boxorange} ref={ref}>
      <div className={styles.stagger + " " + (isIntersecting ? styles.show : styles.hidden) + " " + styles.text}>
        This is where I keep all my accomplishments as pictures i&apos;ve taken.
        <br/>
        <i>(not a lot though, makes me regret that i didnt take more pictures)</i>
        <br/>
        <i>(WIP, will add descriptions to the images later)</i>
      </div>
    </div>
  )
}