import styles from "../styles/About.module.css";
import React from "react";

export const BlogIntro = () => {
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
        <b>Welcome to my blog!</b>
        <br/>
        This is where I write my status updates.
      </div>
    </div>
  )
}