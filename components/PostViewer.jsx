import useSWR from "swr";
import styles from "../styles/PostViewer.module.css";
import {AiFillCalendar, AiFillEye} from "react-icons/ai";
import React from "react";
import {useRouter} from "next/router";

export const PostViewer = (props) => {
  //const [isLoaded, setIsLoaded] = React.useState(false);
  const [viewCount, setViewCount] = React.useState(0)

  // React.useEffect(() => {
  //   if (isLoaded){
  //     // just returns int
  //     fetch(`https://api.thaddev.com/api-v1/postviews/increment?strapiID=${id}`, {method: "POST"}).then(r => console.log(r.text));
  //   }
  // }, [isLoaded]);

  //get post id from props passed in <PostViewer id={id}/>
  const id = props.id;
  //send a request to the api to increment the view count at https://api.thaddev.com/api-v1/postviews/increment?strapiID=${id}

  const options = {method: 'GET', headers: {'Content-Type': 'application/json'}};
  const fetcher = (url) => fetch(url, options).then(res => res.json())
  const {data, error} = useSWR(`https://cms.thaddev.com/api/posts/${id}?populate=*`, fetcher)
  const {viewData, viewDataError} = useSWR(`https://api.thaddev.com/api-v1/postviews/get?strapiID=${id}`, fetcher)

  if (error || viewDataError) {
    if (error) console.log(error)
    if (viewDataError) console.log(viewDataError)
    return (
      <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>
        Loading failed! Check the browser console for details.
      </div>
    );
  }
  if (!data || !viewData) return (
    <div color={"#fff"} style={{margin: "auto", textAlign: "center"}}>
      Loading...
    </div>
  );

  const post = data?.data;

  //if the post data is loaded, grab the post title and send it via props.nameUpdateFunc
  if (post) {
    props.nameUpdateFunc(post.attributes.title)
    //setIsLoaded(true)
  }

  React.useEffect(() => {
    if (viewData) {
      setViewCount(viewData);
      console.log(viewData)
    }
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.postStats}>
        <div className={styles.centeredSvg}>
          <AiFillEye/>
        </div>
        {viewCount} &nbsp;
        Views,
        <div className={styles.centeredSvg}>
          <AiFillCalendar/>
        </div>
        Published at &nbsp;
        {post.attributes.publishedAt === post.attributes.updatedAt ?
          <i>{timeStampToLocalDate(post.attributes.publishedAt)}, updated
            at {timeStampToLocalDate(post.attributes.updatedAt)}</i> :
          timeStampToLocalDate(post.attributes.publishedAt)
        }
      </div>
    </div>
  );
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