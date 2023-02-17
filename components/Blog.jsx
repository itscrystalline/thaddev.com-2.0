import styles from "../styles/Blog.module.css";
import React from "react";
import {useRouter} from 'next/router'
import {BlogIntro} from "./BlogIntro";
import useSWR from "swr";
import {AiFillCalendar} from "react-icons/ai";

export const Blog = () => {
  const router = useRouter()
  const options = {method: 'GET', headers: {'Content-Type': 'application/json'}, body: 'false'};
  const fetcher = (options) => fetch(options).then(res => res.json())

  const {data, error} = useSWR('https://cms.thaddev.com/api/posts?populate=image', fetcher)

  let response = null;
  if (error) {
    response =
      <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>Loading failed! Check the browser console for
        details.</div>
  }
  if (!data) response = <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>Loading...</div>
  else response = null

  const posts = data?.data;

  return (
    <>
      <BlogIntro/>
      <div className={styles.main}>
        {response === null ? <>
            <a href={`/blog/posts?post=${posts[0].id}`}>
              <div className={styles.box + " " + styles.first}>
                <b className={styles.title}>
                  {posts[0].attributes.title}
                </b>
                <p className={styles.description}>
                  {posts[0].attributes.description}
                </p>
                <div className={styles.postStats}>
                  <div className={styles.centeredSvg}>
                    <AiFillCalendar/>
                  </div>
                  {posts[0].attributes.publishedAt !== posts[0].attributes.updatedAt ?
                    <i>{timeStampToLocalDate(posts[0].attributes.publishedAt, router.locale)}</i> : timeStampToLocalDate(posts[0].attributes.publishedAt, router.locale)
                  }
                </div>
              </div>
            </a>
            {posts.slice(1).map((post, index) => (
              <a href={`/blog/posts?post=${post.id}`} key={index}>
                <div className={styles.box}>
                  <b className={styles.title}>
                    {post.attributes.title}
                  </b>
                  <p className={styles.description}>
                    {post.attributes.description}
                  </p>
                  <div className={styles.postStats}>
                    <div className={styles.centeredSvg}>
                      <AiFillCalendar/>
                    </div>
                    {post.attributes.publishedAt === post.attributes.updatedAt ?
                      <i>{timeStampToLocalDate(post.attributes.publishedAt)}</i> : timeStampToLocalDate(post.attributes.publishedAt)
                    }
                  </div>
                </div>
              </a>
            ))
            }
          </>
          : response}
      </div>
    </>
  )
}

const timeStampToLocalDate = (timestamp, locale) => {
  const date = new Date(timestamp);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  };
  return date.toLocaleString(locale, options);
}