import { NavLink } from "react-router-dom";
import "../App.css";

function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation-link">
        Home
      </NavLink>
      <NavLink to="/tweets" className="navigation-link">
        Tweets
      </NavLink>
    </nav>
  );
}

export default Navigation;
