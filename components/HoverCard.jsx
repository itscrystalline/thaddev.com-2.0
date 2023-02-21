import styles from "../styles/HoverCard.module.css";
import React from "react";
import {HiOutlineCode} from "react-icons/hi";
import {BsPlay} from "react-icons/bs";

export const HoverCard = (props) => {
  const [hovering, setHovering] = React.useState(false); // initiate it at false
  const [showModal, setShowModal] = React.useState(false); // initiate it at false

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
    if (showModal) {
      setAndUpdateHovering(false);
    }
  });

  const onClick = () => {
    // show card when clicked
    setShowModal(!showModal);
    setAndUpdateHovering(false);
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
      <div className={styles.hovercard + " " + (showModal ? styles.show : styles.hidden)} style={
        {
          top: top,
          left: left,
          border: `2px solid ${props.borderColor}`,
          boxShadow: `0 6px 10px rgba(0, 0, 0, 0.25), 0 15px 12px ${props.boxShadowColor}`,
          background: props.background,
          color: "#fff",
          width: "500px"
        }
      }>
        {props.hover}
        <div className={styles.more}>
          <div className={styles.sameline}>
            <div className={styles.margin10}>
              <HiOutlineCode/>
            </div>
            View Source
            <div className={styles.margin10}>
              <BsPlay/>
            </div>
            View App
          </div>
        </div>
      </div>
    </>
  )
}