import styles from "../styles/Blog.module.css";
import React from "react";
import {useRouter} from 'next/router'
import {BlogIntro} from "./BlogIntro";
import useSWR from "swr";
import {AiFillCalendar, AiFillEye} from "react-icons/ai";

export const Blog = () => {
  const options = {method: 'GET', headers: {'Content-Type': 'application/json'}, body: 'false'};
  const fetcher = (options) => fetch(options).then(res => res.json())

  const {data, error} = useSWR('https://cms.thaddev.com/api/posts?populate=image', fetcher)
  const {viewData, viewDataError} = useSWR('https://api.thaddev.com/api-v1/postviews/getall', fetcher)

  let response = null;
  if (error) {
    response =
      <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>Loading failed! Check the browser console for
        details.</div>
  }
  if (!data) response = <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>Loading...</div>
  else response = null

  // if (viewDataerror) {
  //   console.log("Loading view data failed!")
  //   console.log(viewDataerror)
  // }

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
                    <AiFillEye/>
                  </div>
                  {viewData?.data[posts[0].id] ? viewData.data[posts[0].id] : 0}


                  <div className={styles.centeredSvg}>
                    <AiFillCalendar/>
                  </div>
                  {posts[0].attributes.publishedAt !== posts[0].attributes.updatedAt ?
                    <i>{timeStampToLocalDate(posts[0].attributes.publishedAt)}</i> : timeStampToLocalDate(posts[0].attributes.publishedAt)
                  }
                </div>
              </div>
            </a>
            {posts.slice(1).map((post, index) => (
              <a href={`/blog/posts?post=${post.id}`}>
                <div className={styles.box}>
                  <b className={styles.title}>
                    {post.attributes.title}
                  </b>
                  <p className={styles.description}>
                    {post.attributes.description}
                  </p>
                  <div className={styles.postStats}>
                    <div className={styles.centeredSvg}>
                      <AiFillEye/>
                    </div>
                    {viewData?.data[post.id] ? viewData.data[post.id] : 0}
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

const timeStampToLocalDate = (timestamp) => {
  const router = useRouter()
  const date = new Date(timestamp);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit"
  };
  return date.toLocaleString(router.locale, options);
}