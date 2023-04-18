function LoadMoreButton({ onLoadMore }) {
  return (
    <button type="button" className="tweet-button" onClick={onLoadMore}>
      Load more
    </button>
  );
}

export default LoadMoreButton;
