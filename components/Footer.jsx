import styles from "../styles/Footer.module.css";
import {Tooltip} from "flowbite-react";
import {AiFillGithub, AiFillMail, AiOutlineInfoCircle} from "react-icons/ai";
import {BsFacebook} from "react-icons/bs";

export const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <div className={styles.link}>
          <a href="mailto:thad@thaddev.com" style={{color: "#fafafa", fontStyle: "bold"}}>
            <div style={{margin: "auto", width: "fit-content"}}><AiFillMail size={35}/></div>
            thad@thaddev.com
          </a>
        </div>
        <div className={styles.link}>
          <a href="https://www.facebook.com/thad.gaming.37" style={{color: "#fafafa", fontStyle: "bold"}}>
            <div style={{margin: "auto", width: "fit-content"}}><BsFacebook size={35}/></div>
            Facebook
          </a>
        </div>
        <div className={styles.link}>
          <a href="https://github.com/MyNameTsThad" style={{color: "#fafafa", fontStyle: "bold"}}>
            <div style={{margin: "auto", width: "fit-content"}}><AiFillGithub size={35}/></div>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}