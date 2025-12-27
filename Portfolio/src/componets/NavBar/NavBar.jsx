import "./NavBar.css";
import { NavLink } from "react-router-dom";

function NavBar() {
  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li>
          <NavLink to="/" className={customClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={customClassName}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={customClassName}>
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-me" className={customClassName}>
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;