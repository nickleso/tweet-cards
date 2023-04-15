import { useState } from "react";
import hansel from "./assets/hansel.png";
import "./App.css";

function TweetCard({ tweets }) {
  const [tweetCount, setTweetCount] = useState(100500);
  const [status, setStatus] = useState(false);

  const onTweetFollow = () => {
    setStatus((prevState) => !prevState);

    status
      ? setTweetCount((prevState) => prevState - 1)
      : setTweetCount((prevState) => prevState + 1);
  };

  return (
    <li className="tweet-card">
      <div className="tweet-logo"></div>
      <div className="tweet-background"></div>

      <div className="tweet-image-box-outer">
        <div className="tweet-image-box">
          <img src={hansel} className="tweet-image" alt="user logo" />
        </div>
      </div>

      <div className="tweet-count-box">
        <p className="tweet-count">777 Tweets</p>
        <p className="tweet-count">{tweetCount} Followers</p>
      </div>

      <button type="button" className="tweet-button" onClick={onTweetFollow}>
        {status ? "Following" : "Follow"}
      </button>
    </li>
  );
}

export default TweetCard;
