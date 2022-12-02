import styles from "../styles/HoverCard.module.css";
import React from "react";

export const HoverCard = (props) => {
  const [hovering, setHovering] = React.useState(false); // initiate it at false

  //set top and left the same as the main div
  const [top, setTop] = React.useState(0);
  const [left, setLeft] = React.useState(0);

  //set the width and height of the hovercard
  const mainRef = React.useRef(null);

  const setDimensions = () => {
    setTop(mainRef.current.offsetTop);
    setLeft(mainRef.current.offsetLeft);
  }

  const setAndUpdateHovering = (value) => {
    setHovering(value);
    setDimensions();
  }

  React.useEffect(() => {
    setDimensions()
  }, []);

  const onClick = () => {
    // show card when clicked
    setAndUpdateHovering(!hovering);
  }

  return (
    <>
      <div className={props.className}
           onMouseEnter={() => setAndUpdateHovering(true)}
           onMouseLeave={() => setAndUpdateHovering(false)}
           ref={mainRef}
           onClick={onClick}
      >
        {props.children}
      </div>
      <div className={styles.hovercard + " " + (hovering ? styles.show : styles.hidden)} style={
        {
          top: top,
          left: left,
          border: `1px solid ${props.borderColor}`,
          boxShadow: `0 4px 7px rgba(0, 0, 0, 0.25), 0 10px 8px ${props.boxShadowColor}`,
          background: props.background,
          color: "#fff"
        }
      }>
        {props.hover}
      </div>
    </>
  )
}