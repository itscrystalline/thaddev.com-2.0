import {Button, Timeline} from "flowbite-react";
import styles from "../styles/Accomplishments.module.css";
import useSWR from 'swr';

export const Accomplishments = () => {
  const options = {method: 'GET', headers: {'Content-Type': 'application/json'}, body: 'false'};
  const fetcher = (options) => fetch(options).then(res => res.json())

  const {data, error} = useSWR('https://api.thaddev.com/api-v1/codingstats/get', fetcher)

  let response = null;
  if (error) response = <div>Loading failed! Check the browser console for details.</div>
  if (!data) response = <div>Loading...</div>

  return (
    <>
      <Timeline.Title className={styles.header}>
        Accomplishments / Statisics
      </Timeline.Title>
      {response === null ? <>
        <Timeline.Body>
          <b className={styles.subtitle}>Github</b>
        </Timeline.Body>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <b className={styles.number}>{data.githubStats.followers}</b>
            Followers
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.githubStats.projects}</b>
            Projects
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.githubStats.stars}</b>
            Overall Stars
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.githubStats.commits}</b>
            Overall Commits
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.githubStats.pulls}</b>
            Pull requests
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.githubStats.contribs}</b>
            External contributions
          </div>
        </div>

        <Timeline.Body>
          <b className={styles.subtitle}>Hackerrank</b>
        </Timeline.Body>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <b className={styles.number}>{data.hackerrankStats.badges}</b>
            Badges
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.hackerrankStats.skills}</b>
            Skills
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.hackerrankStats.questions}</b>
            Questions
          </div>
        </div>

        <Timeline.Body>
          <b className={styles.subtitle}>Leetcode</b>
        </Timeline.Body>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <b className={styles.number}>{/* add st, nd, rd or th */data.leetcodeStats.rank }</b>
            Rank
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.leetcodeStats.contests}</b>
            Contests participated
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.leetcodeStats.contestRating}</b>
            Contest rating
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.leetcodeStats.contestGlobalRanking}</b>
            Contest global ranking
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.leetcodeStats.problems}</b>
            Problems solved
          </div>
          <div className={styles.logo}>
            <b className={styles.number}>{data.leetcodeStats.topContestRanking}</b>
            Top contest ranking
          </div>
        </div>
      </> : response}
    </>
  )
}