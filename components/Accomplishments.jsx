import {Button, Timeline} from "flowbite-react";
import styles from "../styles/Accomplishments.module.css";
import useSWR from 'swr';
import {BsCardImage} from "react-icons/bs";
import {AiOutlineArrowRight} from "react-icons/ai";
import Image from "next/image";

export const Accomplishments = () => {
  const options = {method: 'GET', headers: {'Content-Type': 'application/json'}, body: 'false'};
  const fetcher = (options) => fetch(options).then(res => res.json())

  const {data, error} = useSWR('https://api.thaddev.com/api-v1/codingstats/get', fetcher)

  let response = null;
  if (error) response = <div color={"#fff"}>Loading failed! Check the browser console for details.</div>
  if (!data) response = <div color={"#fff"}>Loading...</div>

  return (
    <>
      <Timeline.Title className={styles.header}>
        Accomplishments / Statisics
      </Timeline.Title>
      {response === null ? <>
        <a href="https://github.com/MyNameTsThad">
          <Timeline.Body>
            <b className={styles.subtitle}>Github</b>
          </Timeline.Body>
          <div className={styles.grid}>
            <div className={styles.box + " " + styles.github}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://github.githubassets.com/favicons/favicon-dark.svg"}
                  width={150} height={150}
                  alt={"Github logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.githubStats.followers}</b>
              Followers
            </div>
            <div className={styles.box + " " + styles.github}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://github.githubassets.com/favicons/favicon-dark.svg"}
                  width={150} height={150}
                  alt={"Github logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.githubStats.projects}</b>
              Projects
            </div>
            <div className={styles.box + " " + styles.github}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://github.githubassets.com/favicons/favicon-dark.svg"}
                  width={150} height={150}
                  alt={"Github logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.githubStats.stars}</b>
              Overall Stars
            </div>
            <div className={styles.box + " " + styles.github}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://github.githubassets.com/favicons/favicon-dark.svg"}
                  width={150} height={150}
                  alt={"Github logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.githubStats.commits}</b>
              Overall Commits
            </div>
            <div className={styles.box + " " + styles.github}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://github.githubassets.com/favicons/favicon-dark.svg"}
                  width={150} height={150}
                  alt={"Github logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.githubStats.pulls}</b>
              Pull requests
            </div>
            <div className={styles.box + " " + styles.github}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://github.githubassets.com/favicons/favicon-dark.svg"}
                  width={150} height={150}
                  alt={"Github logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.githubStats.contribs}</b>
              External contributions
            </div>
          </div>
        </a>

        <a href="https://www.hackerrank.com/ThadDev">
          <Timeline.Body>
            <b className={styles.subtitle}>Hackerrank</b>
          </Timeline.Body>
          <div className={styles.grid}>
            <div className={styles.box + " " + styles.hackerrank}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png"}
                  width={150} height={150}
                  alt={"Hackerrank logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.hackerrankStats.badges}</b>
              Badges
            </div>
            <div className={styles.box + " " + styles.hackerrank}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png"}
                  width={150} height={150}
                  alt={"Hackerrank logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.hackerrankStats.skills}</b>
              Skills
            </div>
            <div className={styles.box + " " + styles.hackerrank}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://hrcdn.net/fcore/assets/favicon-ddc852f75a.png"}
                  width={150} height={150}
                  alt={"Hackerrank logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.hackerrankStats.questions}</b>
              Questions
            </div>
          </div>


          <div className={styles.buttons}>
            <a href={"/gallery#Hackerrank"}>
              <div className={styles.button}>
                <Button outline={true} gradientDuoTone="tealToLime">
                  <BsCardImage size={25}/>
                  &nbsp; &nbsp; View certificates in gallery &nbsp; &nbsp;
                  <AiOutlineArrowRight/>
                </Button>
              </div>
            </a>
          </div>
        </a>


        <a href="https://leetcode.com/ThadDev/">
          <Timeline.Body>
            <b className={styles.subtitle}>Leetcode</b>
          </Timeline.Body>
          <div className={styles.grid}>
            <div className={styles.box + " " + styles.leetcode}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"}
                  width={150} height={176}
                  alt={"Leetcode logo"}
                  loading={"lazy"}
                />
              </div>
              <b
                className={styles.number}>{data.leetcodeStats.rank.toLocaleString()}<sup>{getOrdinal(data.leetcodeStats.rank)}</sup></b>
              Rank
            </div>
            <div className={styles.box + " " + styles.leetcode}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"}
                  width={150} height={176}
                  alt={"Leetcode logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.leetcodeStats.contests}</b>
              Contests participated
            </div>
            <div className={styles.box + " " + styles.leetcode}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"}
                  width={150} height={176}
                  alt={"Leetcode logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.leetcodeStats.contestRating.toLocaleString()}</b>
              Contest rating
            </div>
            <div className={styles.box + " " + styles.leetcode}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"}
                  width={150} height={176}
                  alt={"Leetcode logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.leetcodeStats.contestGlobalRanking.toLocaleString()}</b>
              Contest global ranking
            </div>
            <div className={styles.box + " " + styles.leetcode}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"}
                  width={150} height={176}
                  alt={"Leetcode logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.leetcodeStats.problems}</b>
              Problems solved
            </div>
            <div className={styles.box + " " + styles.leetcode}>
              <div className={styles.backgroundLogo}>
                <Image
                  src={"https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"}
                  width={150} height={176}
                  alt={"Leetcode logo"}
                  loading={"lazy"}
                />
              </div>
              <b className={styles.number}>{data.leetcodeStats.topContestRanking}%</b>
              Top contest ranking
            </div>
          </div>
        </a>
      </> : response}
    </>
  )
}

function getOrdinal(i) {
  const j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return "st";
  }
  if (j === 2 && k !== 12) {
    return "nd";
  }
  if (j === 3 && k !== 13) {
    return "rd";
  }
  return "th";
}