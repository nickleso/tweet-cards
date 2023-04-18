import Navigation from "../components/Navigation";
import Tweets from "../components/Tweets";
import "../App.css";

function Home() {
  return (
    <section className="container">
      <Navigation />
      <Tweets isHomePage={true} />
    </section>
  );
}

export default Home;
