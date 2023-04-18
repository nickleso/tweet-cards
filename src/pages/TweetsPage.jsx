import Navigation from "../components/Navigation";
import Tweets from "../components/Tweets";
import "../App.css";

function TweetsPage() {
  return (
    <section className="container">
      <Navigation />
      <Tweets />
    </section>
  );
}

export default TweetsPage;
