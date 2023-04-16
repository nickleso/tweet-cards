import { useEffect, useState } from "react";
import "./App.css";
import TweetCard from "./TweetCard";
import { fetchUsers } from "./API/fetchUsers";

function App() {
  const [tweetCards, setTweetCards] = useState([]);

  useEffect(() => {
    async function searchUsers() {
      try {
        const users = await fetchUsers();
        setTweetCards(users);
      } catch (error) {
        console.log(error);
      }
    }

    searchUsers();
  }, []);

  return (
    <div className="tweets">
      <ul className="tweet-list">
        {tweetCards.map((tweet) => (
          <TweetCard key={tweet.id} tweetCard={tweet} />
        ))}
      </ul>
    </div>
  );
}

export default App;
