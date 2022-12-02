import styles from '../styles/Navbar.module.css';
import {BsLightning, BsPlug} from "react-icons/bs";
import {AiOutlineInfoCircle, AiOutlineProject} from "react-icons/ai";
import {HiChevronDoubleUp} from "react-icons/hi";
import Image from "next/image";
import {Tooltip} from "flowbite-react";
import React from "react";
import {FiArrowLeft, FiGithub} from "react-icons/fi";

export const Navbar = (props) => {
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
  }, []);

  return (
    <>
      <nav className={styles.navbar + (props.noIcons ? (isIntersecting ? "" : " " + styles.hidden) : "")} ref={ref} id="top">
        {props.noIcons ?
          <>
            <a href={props.arrowTarget}><FiArrowLeft size={25}/></a>
            <div className={styles.smallspacer}/>
          </>
          : <></>
        }
        <div className={styles.logo}>
          <a href="#main">
            <Image src="/logolong.svg" width={194} height={52} priority={true}/>
          </a>
        </div>
        {props.noIcons ?
          <>
            <span className={styles.title}>{props.name}</span>
          </>
          : <></>
        }
        {!props.noIcons ?
          <>
            <div className={styles.spacer}/>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>View Source</p>} placement="bottom" arrow={false}>
                <a href="https://github.com/MyNameTsThad/thaddev.com-2.0"><FiGithub size={25} color={"#ffffff"}/></a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>About Me</p>} placement="bottom" arrow={false}>
                <a href="#about"><AiOutlineInfoCircle size={25} color={"#ffffff"}/></a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>Technologies</p>} placement="bottom" arrow={false}>
                <a href="#technologies"><BsPlug size={25} color={"#ffffff"}/></a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>Projects</p>} placement="bottom" arrow={false}>
                <a href="#projects"><AiOutlineProject size={25} color={"#ffffff"}/>
                </a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>Accomplishments</p>} placement="bottom" arrow={false}>
                <a href="#accomplishments">
                  <BsLightning size={25} color={"#ffffff"}/>
                </a>
              </Tooltip>
            </div>
          </> : <></>
        }
      </nav>
      {!props.noIcons ?
        <>
          <aside
            className={styles.navbarside + " " + (isIntersecting ? styles.navbarsideclosed : styles.navbarsideopen)}>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>Back to Top</p>} placement="left" arrow={false}>
                <a href="#top"><HiChevronDoubleUp size={25} color={"#ffffff"}/></a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>View Source</p>} placement="left" arrow={false}>
                <a href="https://github.com/MyNameTsThad/thaddev.com-2.0"><FiGithub size={25} color={"#ffffff"}/></a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>About Me</p>} placement="left" arrow={false}>
                <a href="#about"><AiOutlineInfoCircle size={25} color={"#ffffff"}/></a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>Technologies</p>} placement="left" arrow={false}>
                <a href="#technologies"><BsPlug size={25} color={"#ffffff"}/></a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>Projects</p>} placement="left" arrow={false}>
                <a href="#projects"><AiOutlineProject size={25} color={"#ffffff"}/>
                </a>
              </Tooltip>
            </div>
            <div className={styles.icons}>
              <Tooltip content={<p style={{fontSize: "smaller"}}>Accomplishments</p>} placement="left" arrow={false}>
                <a href="#accomplishments">
                  <BsLightning size={25} color={"#ffffff"}/>
                </a>
              </Tooltip>
            </div>
          </aside>
        </> :
        <nav className={styles.stickbar + " " + (isIntersecting ? styles.stickbarclosed : styles.stickbaropen)} id="top">
          <a href={"/"}><FiArrowLeft size={25} color={"#ffffff"}/></a>
          <div className={styles.smallspacer}/>
          <div className={styles.logo}>
            <a href="#main">
              <Image src="/logolong.svg" width={194} height={52} priority={true}/>
            </a>
          </div>
          <span className={styles.title}>{props.name}</span>
        </nav>
      }
    </>
  )
}