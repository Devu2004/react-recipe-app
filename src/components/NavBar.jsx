// src/components/NavBar.jsx

import React, { useState } from "react"; // <-- 1. Import useState
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  // 2. Add state to track if menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 3. This function closes the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles.MainConatinerOfNav}>
        {/* 4. Add a logo/brand */}
        <NavLink to="/" className={styles.logo} onClick={handleLinkClick}>
          RecipeApp
        </NavLink>

        {/* 5. Add the Hamburger Button */}
        <button
          className={styles.hamburgerButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggles state
        >
          {/* This creates the 3 lines of the icon */}
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* 6. Add the 'open' class based on state */}
        <div
          className={`${styles.linksContainer} ${
            isMenuOpen ? styles.open : ""
          }`}
        >
          <NavLink to="/" className={styles.navLink} onClick={handleLinkClick}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            About
          </NavLink>
          <NavLink
            to="/recipe"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Recipe
          </NavLink>
          <NavLink
            to="/createrecipe"
            className={styles.navLink}
            onClick={handleLinkClick}
          >
            Create Recipe
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;
