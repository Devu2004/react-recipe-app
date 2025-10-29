// src/pages/About.jsx

import React from "react";
import styles from "./About.module.css"; // <-- 1. IMPORT THE CSS

const About = () => {
  return (
    // 2. APPLY THE STYLES
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About This Recipe Website</h1>

      <div className={styles.text}>
        <p>
          Welcome to our recipe collection! This website was built as a personal
          project to learn and practice web development with React.
        </p>
        <p>
          Here, you can browse a list of delicious recipes, view their detailed
          instructions, and even add your own creations to the mix. The site
          uses React components, Context API for state management, and React
          Router for navigation.
        </p>
        <p>
          Feel free to explore, add a new recipe, or even update and delete
          existing ones. Thank you for visiting!
        </p>
      </div>
    </div>
  );
};

export default About;