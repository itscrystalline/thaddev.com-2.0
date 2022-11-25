import styles from '../styles/Navbar.module.css';
import {BsCardImage, BsLightning, BsPlug} from "react-icons/bs";
import {AiOutlineInfoCircle, AiOutlineProject} from "react-icons/ai";
import {HiChevronDoubleUp} from "react-icons/hi";
import Image from "next/image";
import {Tooltip} from "flowbite-react";
import React from "react";

export const Navbar = () => {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const ref = React.useRef(null);
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);
    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  return (
    <>
      <nav className={styles.navbar} ref={ref} id="top">
        <div className={styles.logo}>
          <a href="#main">
            <Image src="/logolong.svg" width={194} height={52} priority={true}/>
          </a>
        </div>
        <div className={styles.spacer}/>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>About Me</p>} placement="bottom" arrow={false}>
            <a href="#about"><AiOutlineInfoCircle size={25}/></a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Technologies</p>} placement="bottom" arrow={false}>
            <a href="#technologies"><BsPlug size={25}/></a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Projects</p>} placement="bottom" arrow={false}>
            <a href="#projects"><AiOutlineProject size={25}/>
            </a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Accomplishments</p>} placement="bottom" arrow={false}>
            <a href="#accomplishments">
              <BsLightning size={25}/>
            </a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Gallery</p>} placement="bottom" arrow={false}>
            <a href="#gallery">
              <BsCardImage size={25}/>
            </a>
          </Tooltip>
        </div>
      </nav>
      <aside className={styles.navbarside + " " + (isIntersecting ? styles.closed : styles.open)}>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Back to Top</p>} placement="left" arrow={false}>
            <a href="#top"><HiChevronDoubleUp size={25}/></a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>About Me</p>} placement="left" arrow={false}>
            <a href="#about"><AiOutlineInfoCircle size={25}/></a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Technologies</p>} placement="left" arrow={false}>
            <a href="#technologies"><BsPlug size={25}/></a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Projects</p>} placement="left" arrow={false}>
            <a href="#projects"><AiOutlineProject size={25}/>
            </a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Accomplishments</p>} placement="left" arrow={false}>
            <a href="#accomplishments">
              <BsLightning size={25}/>
            </a>
          </Tooltip>
        </div>
        <div className={styles.icons}>
          <Tooltip content={<p style={{fontSize: "smaller"}}>Gallery</p>} placement="left" arrow={false}>
            <a href="#gallery">
              <BsCardImage size={25}/>
            </a>
          </Tooltip>
        </div>
      </aside>
    </>
  )
}