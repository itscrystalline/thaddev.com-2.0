import useSWR from "swr";
import styles from "../styles/PostViewer.module.css";
import {AiFillCalendar} from "react-icons/ai";
import React from "react";
import {useRouter} from "next/router";
import {marked} from 'marked';


export const PostViewer = (props) => {
  const router = useRouter()
  //get post id from props passed in <PostViewer id={id}/>
  const id = props.id;
  //send a request to the api to increment the view count at https://api.thaddev.com/api-v1/postviews/increment?strapiID=${id}

  const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};
  const fetcher = (url) => fetch(url, options).then(res => res.json())
  const {data, error} = useSWR(`https://cms.thaddev.com/api/posts/${id}?populate=*`, fetcher)
  if (error) {
    return (
      <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>Loading failed! Check the browser console for
        details.</div>
    )
  }
  if (!data) return ( <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>Loading...</div>)

  const post = data?.data;
  //if the post data is loaded, grab the post title and send it via props.nameUpdateFunc
  if (post) {
    props.nameUpdateFunc(post.attributes.title)
  }

  const htmlContent = marked.parse(post.attributes.content);

  return (
    <div className={styles.main}>
      <div className={styles.postStats}>
        <div className={styles.centeredSvg}>
          <AiFillCalendar/>
        </div>
        Published at &nbsp;
        {post.attributes.publishedAt === post.attributes.updatedAt ?
          <i>{timeStampToLocalDate(post.attributes.publishedAt, router.locale)}, updated
            at {timeStampToLocalDate(post.attributes.updatedAt, router.locale)}</i> :
          timeStampToLocalDate(post.attributes.publishedAt, router.locale)
        }
      </div>
      <div className="content" dangerouslySetInnerHTML={{__html: htmlContent}}/>
    </div>
  );
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