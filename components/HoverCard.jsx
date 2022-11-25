import styles from "../styles/HoverCard.module.css";
import React from "react";

export const HoverCard = (props) => {
  const [hovering, setHovering] = React.useState(false); // initiate it at false

  //set top and left the same as the main div
  const [top, setTop] = React.useState(0);
  const [left, setLeft] = React.useState(0);

  //set the width and height of the hovercard
  const mainRef = React.useRef(null);

  React.useEffect(() => {
    setTop(mainRef.current.offsetTop);
    setLeft(mainRef.current.offsetLeft);
  });

  const onClick = () => {
    // show card when clicked
    setHovering(!hovering);
  }

  return (
    <>
      <div className={props.className}
           onMouseEnter={() => setHovering(true)}
           onMouseLeave={() => setHovering(false)}
           ref={mainRef}
           onClick={onClick}
      >
        {props.children}
      </div>
      <div className={styles.hovercard + " " + (hovering ? styles.show : styles.hidden)} style={{ top: top, left: left }}>
        {props.hover}
      </div>
    </>
  )
}