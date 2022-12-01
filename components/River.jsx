import {Flowbite, Timeline} from "flowbite-react";
import styles from "../styles/River.module.css";
import {AiOutlineProject} from "react-icons/ai";
import {BsLightning, BsPlug} from "react-icons/bs";
import {Technologies} from "./Technologies";
import {SlideInTimelineContent} from "./SlideInTimelineContent";
import {Projects} from "./Projects";
import {Accomplishments} from "./Accomplishments";

export const River = () => {
  return (
    <Flowbite dark={true}>
      <div className={styles.connector}>
        <Timeline>
          <div className={styles.spacer}>
            <Timeline.Item>
            </Timeline.Item>
          </div>
          <div id="technologies" className={styles.spacer}>
            <Timeline.Item>
              <Timeline.Point icon={BsPlug}/>
              <SlideInTimelineContent>
                <Technologies/>
              </SlideInTimelineContent>
            </Timeline.Item>
          </div>
          <div id="projects" className={styles.spacer}>
            <Timeline.Item>
              <Timeline.Point icon={AiOutlineProject}/>
              <SlideInTimelineContent>
                <Projects/>
              </SlideInTimelineContent>
            </Timeline.Item>
          </div>
          <div id="accomplishments" className={styles.spacer}>
            <Timeline.Item>
              <Timeline.Point icon={BsLightning}/>
              <SlideInTimelineContent>
                <Accomplishments/>
              </SlideInTimelineContent>
            </Timeline.Item>
          </div>
        </Timeline>
      </div>
    </Flowbite>
  )
}