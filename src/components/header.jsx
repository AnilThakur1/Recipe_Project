import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/logoipsum-359.svg";
import "./header.css";
import MealSearch from "./MealSearch";
import { FaBars, FaTimes } from "react-icons/fa";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    } else {
      setMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuOpen) {
      setIsAnimating(true);
      setTimeout(() => {
        setMenuOpen(false);
        setIsAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      if (menuOpen) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  return (
    <header>
      <div className='mobile-header'>


        <div className="main_header width_95 ">
          <NavLink to="/home" className="Logos" onClick={closeMenu}>
            <img src={logo} alt="logo" />
            <p className="website_name">
              the <span className="highlight_recipe">recipe</span> website
            </p>
          </NavLink>

          <div className="hamburger_icon" onClick={toggleMenu} ref={iconRef}>
            {menuOpen ? <FaTimes className='menu-icon' size={25} /> : <FaBars className='close-icon' size={25} />}
          </div>

          <nav
            ref={menuRef}
            className={`page_list ${menuOpen
                ? isAnimating
                  ? "menu_closed"
                  : "show_menu"
                : isAnimating
                  ? "menu_closed"
                  : ""
              }`}
          >
            <NavLink to="/home" onClick={closeMenu}
              className={({ isActive }) => isActive ? "active_link" : "inactive_link"}>
              Home
            </NavLink>
            <NavLink to="/blog" onClick={closeMenu}
              className={({ isActive }) => isActive ? "active_link" : "inactive_link"}>
              Blog
            </NavLink>
            <NavLink to="/about" onClick={closeMenu}
              className={({ isActive }) => isActive ? "active_link" : "inactive_link"}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={closeMenu}
              className={({ isActive }) => isActive ? "active_link" : "inactive_link"}>
              Contact
            </NavLink>


          </nav>
        </div>

      </div>

      <MealSearch />
    </header>
  );
}

export default Header;
