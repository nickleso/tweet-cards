import { useState } from "react";
import "./App.css";
import TweetCard from "./TweetCard";

function App() {
  const [tweets, setTweets] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ]);

  return (
    <div className="tweets">
      <ul className="tweet-list">
        {tweets.map((item) => (
          <TweetCard key={item} tweets={tweets} />
        ))}
      </ul>
    </div>
  );
}

export default App;
