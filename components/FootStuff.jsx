import styles from "../styles/FootStuff.module.css";
import React from "react";
import {Button, Tooltip} from "flowbite-react";
import {BsCardImage, BsListNested} from "react-icons/bs";
import {AiFillApi, AiOutlineArrowRight} from "react-icons/ai";

export const FootStuff = () => {
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
    <div className={styles.box} ref={ref} id="footer">
      <h1 className={styles.header + " " + (isIntersecting ? styles.show : styles.hidden)}>My other stuff!</h1>
      <div className={styles.stagger + " " + (isIntersecting ? styles.show : styles.hidden) + " " + styles.text}>
        <div className={styles.buttons}>
          <a href={"/gallery"}>
            <div className={styles.button}>
              <Button outline={true} gradientDuoTone="pinkToOrange" on>
                <BsCardImage size={25}/> &nbsp; &nbsp; Gallery &nbsp; &nbsp; <AiOutlineArrowRight/>
              </Button>
            </div>
          </a>

          <a href={"/blog"}>
            <div className={styles.button}>
              <Button outline={true} gradientDuoTone="pinkToOrange">
                <BsListNested size={25}/> &nbsp; &nbsp; Blog &nbsp; &nbsp; <AiOutlineArrowRight/>
              </Button>
            </div>
          </a>

          <Tooltip content="Coming Soon!" placement="top">
            <div className={styles.disabledcur}>
              <div className={styles.disabled}>
                <div className={styles.button}>
                  <Button outline={true} gradientDuoTone="pinkToOrange">
                    <AiFillApi size={25}/> &nbsp; &nbsp; API Directory &nbsp; &nbsp; <AiOutlineArrowRight/>
                  </Button>
                </div>
              </div>
            </div>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}