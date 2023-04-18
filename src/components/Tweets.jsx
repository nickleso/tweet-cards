import { useEffect, useState } from "react";
// import "../index.css";
import "../App.css";

import TweetCard from "./TweetCards";

import { fetchTweets, fetchUser, updateUser } from "../API/fetchTweets";
import LoadMoreButton from "./LoadMoreButton";

function Tweets({ isHomePage }) {
  const [user, setUser] = useState(null);
  const [subs, setSubs] = useState([]);
  const [tweetCards, setTweetCards] = useState([]);
  const [page, setPage] = useState(1);
  const [showButton, setShowButton] = useState(true);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    async function searchUser() {
      try {
        const user = await fetchUser(2);
        setUser(user);
        setSubs(user.subscriptions);
      } catch (error) {
        console.log(error);
      }
    }
    searchUser();
  }, []);

  useEffect(() => {
    async function searchTweets() {
      try {
        const tweets = await fetchTweets(page);
        setTweetCards(tweets);
      } catch (error) {
        console.log(error);
      }
    }
    searchTweets();
  }, []);

  useEffect(() => {
    if (isFirstRender) {
      return;
    }

    async function searchTweets() {
      try {
        const tweets = await fetchTweets(page);
        setTweetCards((prevState) => [...prevState, ...tweets]);

        if (tweets.length < 10) {
          console.log("false");
          setShowButton(false);
        }
      } catch (error) {
        console.log(error);
      }
    }
    searchTweets();
  }, [page]);

  const addSubscription = (sub) => {
    subs.unshift(sub);
    updateSubscription();
  };

  const deleteSubscription = (sub) => {
    const index = subs.findIndex((elem) => elem === sub);
    subs.splice(index, 1);
    updateSubscription();
  };

  const updateSubscription = async () => {
    try {
      await updateUser(user.id, user);
    } catch (error) {
      console.log(error);
    }
  };

  const onLoadMore = async () => {
    setPage((prevState) => prevState + 1);
    setIsFirstRender(false);
  };

  return (
    <>
      <h3>Hello, {user?.name}!</h3>
      {isHomePage && <p>List of followed tweets:</p>}
      <div className="tweets">
        <ul className="tweet-list">
          {tweetCards.map((tweet) => (
            <TweetCard
              key={tweet.id}
              tweetCard={tweet}
              subscriptions={subs}
              addSubscription={addSubscription}
              deleteSubscription={deleteSubscription}
              isHomePage={isHomePage}
            />
          ))}
        </ul>
      </div>

      {!isHomePage && showButton && <LoadMoreButton onLoadMore={onLoadMore} />}
    </>
  );
}

export default Tweets;
