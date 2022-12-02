import {Tabs, Timeline} from "flowbite-react";
import styles from "../styles/Projects.module.css";
import {HoverCard} from "./HoverCard";
import {Javascript} from "./badges/Javascript";
import {Java} from "./badges/Java";
import {CPlusPlus} from "./badges/CPlusPlus";
import {Python} from "./badges/Python";
import {CSharp} from "./badges/CSharp";
import {Minecraft} from "./badges/Minecraft";
import {Discord} from "./badges/Discord";
import {Arduino} from "./badges/Arduino";
import {Android} from "./badges/Android";
import {LINEMessenger} from "./badges/LINEMessenger";
import {Unity} from "./badges/Unity";

export const Projects = () => {
  return (
    <>
      <Timeline.Title className={styles.header}>
        Projects
      </Timeline.Title>
      <Timeline.Body className={styles.subheader}>
        I have a wide
        range of passion projects, ranging from games to websites to show for my coding skills. I have/had been involved
        in a few hackathons/competitions from different places, both online and offline.
      </Timeline.Body>
      {/*custom logo grid for different logos for technologies*/}
      <Tabs.Group
        aria-label="Pills"
        style="pills"
      >
        <Tabs.Item active={true} title="All">
          <div className={styles.grid}>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>PCCCHON Locator</span>
                             <Javascript/>
                             <hr className={styles.seperator}/>
                             Map for the Princess Chulabhorn Science High School Chonburi.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>PCCCHON Locator</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>IWant2TryHard&apos;s Shortbows</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds Shortbows. Shoot your foes with high speed, - And in style! Built
                             using the Forge and Fabric modding APIs with Java.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>IWant2TryHard&apos;s Shortbows</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Cool Ideas Mod</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds... whatever I want to add. The featuresets of this mod will be
                             branched into other mods. Built using the Forge and Fabric modding APIs with Java.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Cool Ideas Mod</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>CombatUtilities</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds utility features to make Minecraft combat easier. Built using the
                             Fabric modding API with Java.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>CombatUtilities</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>thaddev.com</span>
                             <Javascript/>
                             <hr className={styles.seperator}/>
                             This very website. It&apos;s built with React.js/Next.js and hosted on Raspberry Pi with
                             the help of
                             Docker and Cloudflare.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>thaddev.com</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Some Discord Bot</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Discord/>
                             </div>
                             <hr className={styles.seperator}/>
                             A multi-purpose discord bot that can be used for moderation, fun, and more, for my
                             friend&apos;s
                             discord server. Built with Java using the JDA library.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Some Discord Bot</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Project APIs</span>
                             <Java/>
                             <hr className={styles.seperator}/>
                             Web server that also hosts an API for my personal projects. Built with Java and Spring
                             Boot.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Project APIs</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>IoT Door Lock</span>
                             <div className="flex flex-wrap gap-2">
                               <CPlusPlus/> <Arduino/>
                             </div>
                             <hr className={styles.seperator}/>
                             A smart door lock that can be controlled both on-the-spot and remotely via the Blynk
                             platform.
                             Built using the NodeMCU ESP8266 with Arduino and the Blynk platform library.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>IoT Door Lock</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Pydoku</span>
                             <Python/>
                             <hr className={styles.seperator}/>
                             A text-based version of the classic puzzle game Sudoku made in Vanilla Python. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Pydoku</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Boosted Burgers App</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Android/>
                             </div>
                             <hr className={styles.seperator}/>
                             An mock android app for the VERSO HACK 2022 hackathon. Built using Java. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Boosted Burgers App</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Helpful Utils Bot</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <LINEMessenger/>
                             </div>
                             <hr className={styles.seperator}/>
                             A LINE bot that can be used for various things. Built using Java and the LINE library. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Helpful Utils Bot</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Geometry Mix</span>
                             <div className="flex flex-wrap gap-2">
                               <CSharp/> <Unity/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Simple game where you combine similar shapes and avoid other shapes. Built using Unity
                             and
                             C#. Made for the ProcJam Game Jam on itch.io. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Geometry Mix</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Hytils</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds features to minigames on the Hypixel Network. Built using Java
                             and
                             Forge. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Hytils</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Notes App</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Android/>
                             </div>
                             <hr className={styles.seperator}/>
                             An android app for taking short, simple, text notes, simple as that. Built using Java. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Notes App</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>SkyblockItems++</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds game mechanics and features from the Hypixel game
                             mode &apos;Skyblock&apos; as
                             a Forge mod. Built using Java and Forge. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>SkyblockItems++</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Tree Game</span>
                             <div className="flex flex-wrap gap-2">
                               <CSharp/> <Unity/>
                             </div>
                             <hr className={styles.seperator}/>
                             A simple game where you chop down a set amount of trees with apples in the given time.
                             Currently live on the Google Play Store. Built using Unity and C#. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Tree Game</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>BattleParkour</span>
                             <div className="flex flex-wrap gap-2">
                               <CSharp/> <Unity/>
                             </div>
                             <hr className={styles.seperator}/>
                             My first Unity game. Reach the end of the level while facing enemies. Currently live on the
                             Google Play Store.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>BattleParkour</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>HealthMod</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A simple mod for Minecraft version 1.8.9 that warns you whenever you&apos;re health is low.
                             Built
                             using Java and Forge. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>HealthMod</span>
            </HoverCard>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Games">
          <div className={styles.grid}>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Pydoku</span>
                             <Python/>
                             <hr className={styles.seperator}/>
                             A text-based version of the classic puzzle game Sudoku made in Vanilla Python. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Pydoku</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Geometry Mix</span>
                             <div className="flex flex-wrap gap-2">
                               <CSharp/> <Unity/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Simple game where you combine similar shapes and avoid other shapes. Built using Unity
                             and
                             C#. Made for the ProcJam Game Jam on itch.io. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Geometry Mix</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Tree Game</span>
                             <div className="flex flex-wrap gap-2">
                               <CSharp/> <Unity/>
                             </div>
                             <hr className={styles.seperator}/>
                             A simple game where you chop down a set amount of trees with apples in the given time.
                             Currently live on the Google Play Store. Built using Unity and C#. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Tree Game</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>BattleParkour</span>
                             <div className="flex flex-wrap gap-2">
                               <CSharp/> <Unity/>
                             </div>
                             <hr className={styles.seperator}/>
                             My first Unity game. Reach the end of the level while facing enemies. Currently live on the
                             Google Play Store.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>BattleParkour</span>
            </HoverCard>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Web">
          <div className={styles.grid}>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>PCCCHON Locator</span>
                             <Javascript/>
                             <hr className={styles.seperator}/>
                             Map for the Princess Chulabhorn Science High School Chonburi.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>PCCCHON Locator</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>thaddev.com</span>
                             <Javascript/>
                             <hr className={styles.seperator}/>
                             This very website. It&apos;s built with React.js/Next.js and hosted on Raspberry Pi with
                             the
                             help of
                             Docker and Cloudflare.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>thaddev.com</span>
            </HoverCard>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Backend / API">
          <div className={styles.grid}>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Project APIs</span>
                             <Java/>
                             <hr className={styles.seperator}/>
                             Web server that also hosts an API for my personal projects. Built with Java and Spring
                             Boot.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Project APIs</span>
            </HoverCard>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Minecraft Mods">
          <div className={styles.grid}>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>IWant2TryHard&apos;s Shortbows</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds Shortbows. Shoot your foes with high speed, - And in style! Built
                             using the Forge and Fabric modding APIs with Java.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>IWant2TryHard&apos;s Shortbows</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Cool Ideas Mod</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds... whatever I want to add. The featuresets of this mod will be
                             branched into other mods. Built using the Forge and Fabric modding APIs with Java.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Cool Ideas Mod</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>CombatUtilities</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds utility features to make Minecraft combat easier. Built using the
                             Fabric modding API with Java.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>CombatUtilities</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Hytils</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds features to minigames on the Hypixel Network. Built using Java
                             and
                             Forge. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Hytils</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>SkyblockItems++</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A Minecraft mod that adds game mechanics and features from the Hypixel game
                             mode &apos;Skyblock&apos; as
                             a Forge mod. Built using Java and Forge. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>SkyblockItems++</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>HealthMod</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Minecraft/>
                             </div>
                             <hr className={styles.seperator}/>
                             A simple mod for Minecraft version 1.8.9 that warns you whenever you&apos;re health is low.
                             Built
                             using Java and Forge. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>HealthMod</span>
            </HoverCard>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Apps">
          <div className={styles.grid}>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Boosted Burgers App</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Android/>
                             </div>
                             <hr className={styles.seperator}/>
                             An mock android app for the VERSO HACK 2022 hackathon. Built using Java. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Boosted Burgers App</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Notes App</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Android/>
                             </div>
                             <hr className={styles.seperator}/>
                             An android app for taking short, simple, text notes, simple as that. Built using Java. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Notes App</span>
            </HoverCard>
          </div>
        </Tabs.Item>
        <Tabs.Item title="Miscellaneous">
          <div className={styles.grid}>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Some Discord Bot</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <Discord/>
                             </div>
                             <hr className={styles.seperator}/>
                             A multi-purpose discord bot that can be used for moderation, fun, and more, for my
                             friend&apos;s
                             discord server. Built with Java using the JDA library.
                           </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Some Discord Bot</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>IoT Door Lock</span>
                             <div className="flex flex-wrap gap-2">
                               <CPlusPlus/> <Arduino/>
                             </div>
                             <hr className={styles.seperator}/>
                             A smart door lock that can be controlled both on-the-spot and remotely via the Blynk
                             platform.
                             Built using the NodeMCU ESP8266 with Arduino and the Blynk platform library.
                           </>
                         }
                       borderColor={"#00ea64"}
                       boxShadowColor={"#0059281e"}
                       background={"#0e141e"}
            >
              <span className={styles.title}>IoT Door Lock</span>
            </HoverCard>
            <HoverCard className={styles.logo}
                       hover=
                         {
                           <>
                             <span className={styles.title}>Helpful Utils Bot</span>
                             <div className="flex flex-wrap gap-2">
                               <Java/> <LINEMessenger/>
                             </div>
                             <hr className={styles.seperator}/>
                             A LINE bot that can be used for various things. Built using Java and the LINE library. </>
                         }
                       borderColor={"#ff0f6f"}
                       boxShadowColor={"#ff0f6f1e"}
                       background={"#292929"}
            >
              <span className={styles.title}>Helpful Utils Bot</span>
            </HoverCard>
          </div>
        </Tabs.Item>
      </Tabs.Group>
    </>
  )
}