import Button from "./Button";

import hansel from "../assets/hansel.jpg";

function TweetCardItem({
  avatar,
  tweets,
  followersCount,
  isNotFollowing,
  onTweetFollow,
}) {
  return (
    <li className="tweet-card">
      <div className="tweet-logo"></div>
      <div className="tweet-background"></div>

      <div className="tweet-image-box-outer">
        <div className="tweet-image-box">
          <img
            src={avatar || hansel}
            className="tweet-image"
            alt="user avatar"
          />
        </div>
      </div>

      <div className="tweet-count-box">
        <p className="tweet-count">{tweets || 0} Tweets</p>
        <p className="tweet-count">
          {followersCount?.toLocaleString("en-US") || 0} Followers
        </p>
      </div>

      <Button
        isNotFollowing={isNotFollowing}
        onTweetFollow={onTweetFollow}
      ></Button>
    </li>
  );
}

export default TweetCardItem;
