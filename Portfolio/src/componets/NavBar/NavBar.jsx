import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const customClassName = ({ isActive }) =>
    "menu__link" + (isActive ? " menu__link_active" : "");

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Close on ESC + lock body scroll when open
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    if (isOpen) {
      document.body.classList.add("no-scroll");
      window.addEventListener("keydown", handleEsc);
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay (click outside to close) */}
      <div
        className={`menu__overlay ${isOpen ? "menu__overlay_open" : ""}`}
        onClick={closeMenu}
      />

      <header className="menu">
        <div className="menu__inner">
          <NavLink to="/" className="menu__brand" onClick={closeMenu}>
            
          </NavLink>

          {/* Desktop nav */}
          <nav className="menu__nav">
            <NavLink to="/" className={customClassName}>
              Home
            </NavLink>
            <NavLink to="/projects" className={customClassName}>
              Projects
            </NavLink>
            <NavLink to="/about" className={customClassName}>
              About Me
            </NavLink>
            <NavLink to="/contact-me" className={customClassName}>
              Contact Me
            </NavLink>
          </nav>

          {/* Hamburger (mobile) */}
          <button
            type="button"
            className={`menu__burger ${isOpen ? "menu__burger_open" : ""}`}
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span className="menu__burger-line" />
            <span className="menu__burger-line" />
            <span className="menu__burger-line" />
          </button>
        </div>

        {/* Mobile dropdown */}
        <nav className={`menu__mobile ${isOpen ? "menu__mobile_open" : ""}`}>
          <NavLink to="/" className={customClassName} onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/projects" className={customClassName} onClick={closeMenu}>
            Projects
          </NavLink>
          <NavLink to="/about" className={customClassName} onClick={closeMenu}>
            About Me
          </NavLink>
          <NavLink to="/contact-me" className={customClassName} onClick={closeMenu}>
            Contact Me
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
