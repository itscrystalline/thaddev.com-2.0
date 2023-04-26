import {Timeline} from "flowbite-react";
import styles from "../styles/SlideInTimelineContent.module.css";
import React from "react";

export const SlideInTimelineContent = (props) => {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  const options = {
    root: null,
    rootMargin: "-50px",
    threshold: 0
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
    <div ref={ref} className={isIntersecting ? styles.show : styles.hidden}>
      <Timeline.Content>
        {props.children}
      </Timeline.Content>
    </div>
  )
}