import { useState, useEffect } from "react";
import "./App.css";
import { updateUser } from "./API/fetchUsers";

function TweetCard({ tweetCard }) {
  const { id, user, tweets, followers, avatar } = tweetCard;
  const [followersCount, setFollowersCount] = useState(followers);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(false);

  const onTweetFollow = () => {
    setIsFollowing((prevState) => !prevState);
    setIsFirstRender((prevState) => !prevState);

    isFollowing
      ? setFollowersCount((prevState) => prevState - 1)
      : setFollowersCount((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (isFirstRender) {
      return;
    }
    console.log(isFirstRender);

    const credentials = {
      id,
      user,
      tweets,
      followers: followersCount,
      avatar,
    };

    async function updateUserFollowers() {
      try {
        console.log("update");
        // await updateUser(id, credentials);
      } catch (error) {
        console.log(error);
      }
    }

    updateUserFollowers();
  }, [followersCount]);

  return (
    <li className="tweet-card">
      <div className="tweet-logo"></div>
      <div className="tweet-background"></div>

      <div className="tweet-image-box-outer">
        <div className="tweet-image-box">
          <img src={avatar} className="tweet-image" alt="user avatar" />
        </div>
      </div>

      <div className="tweet-count-box">
        <p className="tweet-count">{tweets} Tweets</p>
        <p className="tweet-count">{followersCount} Followers</p>
      </div>

      <button type="button" className="tweet-button" onClick={onTweetFollow}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </li>
  );
}

export default TweetCard;
