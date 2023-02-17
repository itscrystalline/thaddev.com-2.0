import styles from "../styles/Countdown.module.css";
import React from "react";

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = React.useState([0, 0, 0, 0, 0, 0, 0, 0]);
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
      <div className={styles.bigbanner}>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[0]}</code>
        </div>
        <div className={styles.bigblacksquare}>
          <code className={styles.bigbigtext}>{timeLeft[1]}</code>
        </div>
        <code className={styles.bigcolon}>:</code>
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
      </div>
    </>
  )
}