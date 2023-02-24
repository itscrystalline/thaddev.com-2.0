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

  const onModalClick = () => {
    // show card when clicked
    setShowModal(false);
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
      <div className={styles.permcard + " " + (showModal ? styles.show : styles.permhidden)} style={
        {
          top: top,
          left: left,
          border: `2px solid ${props.borderColor}`,
          boxShadow: `0 6px 10px rgba(0, 0, 0, 0.25), 0 15px 12px ${props.boxShadowColor}`,
          background: props.background,
          color: "#fff",
          width: "500px"
        }}
           onClick={onModalClick}
      >
        {props.hover}
        <div className={styles.more}>
          {props.ytid ?
            <iframe className={styles.yt} src={"https://www.youtube.com/embed/" + props.ytid} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen">
            </iframe> : null
          }
          <div className={styles.sameline}>
            {props.source ?
              <a href={props.source} className={styles.inlinesvg}>
                <div className={styles.margin10}>
                  <HiOutlineCode/>
                </div>
                View Source
              </a>
              : null
            }

            {props.view ?
              <a href={props.view} className={styles.inlinesvg}>
                <div className={styles.margin10}>
                  <BsPlay/>
                </div>
                See Live
              </a>
              : null
            }
          </div>
        </div>
      </div>
    </>
  )
}