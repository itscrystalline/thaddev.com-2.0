import styles from '../styles/Navbar.module.css';
import styles2 from '../styles/Countdown.module.css';
import {BsLightning, BsPlug} from "react-icons/bs";
import {AiOutlineInfoCircle, AiOutlineProject} from "react-icons/ai";
import {HiChevronDoubleUp} from "react-icons/hi";
import Image from "next/image";
import {Tooltip} from "flowbite-react";
import React from "react";
import {FiArrowLeft, FiGithub} from "react-icons/fi";

export const Navbar = (props) => {
  const [isIntersecting, setIntersecting] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState([0, 0, 0, 0, 0, 0, 0, 0]);
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

  React.useEffect(() => {
    //returns array of length 8 where each 2 elements are the time left in days, hours, minutes, seconds padded with 0 if necessary
    const targetTime = 1677133800000;
    const timeLeftMillis = targetTime - Date.now();

    const seconds = Math.floor((timeLeftMillis / 1000) % 60);
    const minutes = Math.floor((timeLeftMillis / 1000 / 60) % 60);
    const hours = Math.floor((timeLeftMillis / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeLeftMillis / (1000 * 60 * 60 * 24));

    //convert to string and pad with 0 if necessary
    const daysStr = days.toString().padStart(2, "0");
    const hoursStr = hours.toString().padStart(2, "0");
    const minutesStr = minutes.toString().padStart(2, "0");
    const secondsStr = seconds.toString().padStart(2, "0");

    // split into array of length 8
    setTimeLeft([daysStr[0], daysStr[1], hoursStr[0], hoursStr[1], minutesStr[0], minutesStr[1], secondsStr[0], secondsStr[1]]);

  }, [timeLeft]);

  return (
    <>
      <nav className={styles.navbar + (props.noIcons ? (isIntersecting ? "" : " " + styles.hidden) : "")} ref={ref}
           id="top">
        {props.noIcons ?
          <>
            <a href={props.arrowTarget}><FiArrowLeft size={25}/></a>
            <div className={styles.smallspacer}/>
          </>
          : <></>
        }
        <a href={"/#main"}>
          <Image src="/logolong.svg" width={194} height={52} priority={true}/>
        </a>
        {props.noIcons ?
          <>
            <span className={styles.title}>{props.name}</span>
          </>
          :
          <>
            <div className={styles.spacer}/>
            <a href={"/countdown"}>
              <div className={styles2.banner} id="top">
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[0]}</code>
                </div>
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[1]}</code>
                </div>
                <code className={styles2.colon}>:</code>
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[2]}</code>
                </div>
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[3]}</code>
                </div>
                <code className={styles2.colon}>:</code>
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[4]}</code>
                </div>
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[5]}</code>
                </div>
                <code className={styles2.colon}>:</code>
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[6]}</code>
                </div>
                <div className={styles2.blacksquare}>
                  <code className={styles2.bigtext}>{timeLeft[7]}</code>
                </div>
              </div>
            </a>
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
          </>
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
        <nav className={styles.stickbar + " " + (isIntersecting ? styles.stickbarclosed : styles.stickbaropen)}
             id="top">
          <a href={props.arrowTarget}><FiArrowLeft size={25} color={"#ffffff"}/></a>
          <div className={styles.smallspacer}/>
          <div className={styles.logo}>
            <a href="/#main">
              <Image src="/logolong.svg" width={194} height={52} priority={true}/>
            </a>
          </div>
          <span className={styles.title}>{props.name}</span>
        </nav>
      }
    </>
  )
}