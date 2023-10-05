import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navBar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>
    </nav>
  );
};
