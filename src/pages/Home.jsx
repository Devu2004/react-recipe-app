// src/pages/Home.jsx
// This code is already correct!

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.heroTitle}>Welcome to Your Recipe Book</h1>
      <p className={styles.heroSubtitle}>
        Discover, create, and share your favorite recipes all in one place.
        What are you in the mood for today?
      </p>
      
      <Link to="/recipe" className={styles.heroButton}>
        Browse All Recipes
      </Link>
    </div>
  );
};

export default Home;