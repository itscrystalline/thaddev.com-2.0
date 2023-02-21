import styles from "../styles/Countdown.module.css";
import React from "react";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = React.useState(["-", "-", "-", "-", "-", "-", "-", "-"]);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isDaysDone, setIsDaysDone] = React.useState(false);
  const [isSecsDone, setIsSecsDone] = React.useState(false);
  React.useEffect(() => {
    setInterval(() => {
      //returns array of length 8 where each 2 elements are the time left in days, hours, minutes, seconds padded with 0 if necessary
      const targetTime = 1677133800000;
      const timeLeftMillis = targetTime - Date.now();

      const seconds = Math.floor((timeLeftMillis / 1000) % 60);
      const minutes = Math.floor((timeLeftMillis / 1000 / 60) % 60);
      const hours = Math.floor((timeLeftMillis / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timeLeftMillis / (1000 * 60 * 60 * 24));

      //convert to string and pad with 0 if necessary
      let daysStr = days.toString().padStart(2, "0");
      let hoursStr = hours.toString().padStart(2, "0");
      let minutesStr = minutes.toString().padStart(2, "0");
      let secondsStr = seconds.toString().padStart(2, "0");

      if (daysStr === "00") {
        daysStr = "WE";
        setIsDaysDone(true);
        if (hoursStr === "00") {
          hoursStr = "RE";
          if (minutesStr === "00") {
            minutesStr = "DO";
            if (secondsStr === "00") {
              secondsStr = "NE";
              setIsSecsDone(true);
            }
          }
        }
      }

      setTimeLeft([daysStr[0], daysStr[1], hoursStr[0], hoursStr[1], minutesStr[0], minutesStr[1], secondsStr[0], secondsStr[1]]);
    }, 1000);
  }, []);



  //get screen width
  React.useEffect(() => {
    if (window.innerWidth <= 768) setIsMobile(true);
    window.addEventListener('resize', ()=> {
      if (window.innerWidth <= 768) setIsMobile(true);
      else setIsMobile(false);
    })
  })

  if (isMobile){
    return (
      <>
        <div className={styles.banner} id="top">
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[0]}</code>
          </div>
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[1]}</code>
          </div>
          <code className={styles.colon}>{isDaysDone? "'" : ":"}</code>
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[2]}</code>
          </div>
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[3]}</code>
          </div>
          <code className={styles.colon}>:</code>
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[4]}</code>
          </div>
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[5]}</code>
          </div>
          <code className={styles.colon}>:</code>
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[6]}</code>
          </div>
          <div className={styles.blacksquare}>
            <code className={styles.bigtext}>{timeLeft[7]}</code>
          </div>
          {isSecsDone? <code className={styles.colon}>!</code> : null}
        </div>
    </>)
  }
  return (
    <>
      <div className={styles.bigbanner}>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[0]}</code>
        </div>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[1]}</code>
        </div>
        <code className={styles.bigcolon}>{isDaysDone? "'" : ":"}</code>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[2]}</code>
        </div>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[3]}</code>
        </div>
        <code className={styles.bigcolon}>:</code>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[4]}</code>
        </div>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[5]}</code>
        </div>
        <p className={styles.bigcolon}>:</p>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[6]}</code>
        </div>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[7]}</code>
        </div>
        {isSecsDone? <code className={styles.bigcolon}>!</code> : null}
      </div>
    </>
  )
}