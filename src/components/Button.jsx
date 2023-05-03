function Button({ isNotFollowing, onTweetFollow }) {
  return (
    <button
      type="button"
      className={isNotFollowing ? "tweet-button" : "tweet-button-active"}
      onClick={onTweetFollow}
    >
      {isNotFollowing ? "Follow" : "Following"}
    </button>
  );
}

export default Button;
