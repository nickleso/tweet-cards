import { useState, useEffect } from "react";
import "../App.css";

import { updateTweets } from "../API/fetchTweets";
import TweetCardItem from "./TweetCardItem";

function TweetCard({
  subscriptions,
  tweetCard,
  addSubscription,
  deleteSubscription,
  isHomePage = false,
}) {
  const { id, user, tweets, followers, avatar } = tweetCard;

  const [followersCount, setFollowersCount] = useState(followers);
  const [isNotFollowing, setIsNotFollowing] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const onTweetFollow = () => {
    if (isNotFollowing) {
      setFollowersCount((prevState) => prevState + 1);
      addSubscription(id);
    }

    if (!isNotFollowing) {
      setFollowersCount((prevState) => prevState - 1);
      deleteSubscription(id);
    }

    setIsNotFollowing((prevState) => !prevState);
    setIsFirstRender(false);
  };

  useEffect(() => {
    if (subscriptions.length < 0) {
      return;
    }

    const findSubsctiptions = () => {
      const isSubscribed = subscriptions.some((elem) => elem === id);

      if (isSubscribed) {
        return setIsNotFollowing(false);
      }
      setIsNotFollowing(true);
    };
    findSubsctiptions();
  }, [id, subscriptions]);

  useEffect(() => {
    if (isFirstRender) {
      return;
    }

    const credentials = {
      id,
      user,
      tweets,
      followers: followersCount,
      avatar,
    };

    async function updateUserFollowers() {
      try {
        await updateTweets(id, credentials);
      } catch (error) {
        console.log(error);
      }
    }

    updateUserFollowers();
  }, [followersCount]);

  return isHomePage ? (
    !isNotFollowing && (
      <TweetCardItem
        avatar={avatar}
        tweets={tweets}
        followersCount={followersCount}
        isNotFollowing={isNotFollowing}
        onTweetFollow={onTweetFollow}
      />
    )
  ) : (
    <TweetCardItem
      avatar={avatar}
      tweets={tweets}
      followersCount={followersCount}
      isNotFollowing={isNotFollowing}
      onTweetFollow={onTweetFollow}
    />
  );
}

export default TweetCard;
