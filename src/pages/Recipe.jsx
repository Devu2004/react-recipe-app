// src/pages/Recipe.jsx

import React, { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import styles from "./Recipe.module.css"; 

const Recipe = () => {
  const { data } = useContext(recipeContext);

  if (data.length === 0) {
    return <div className={styles.noRecipes}>No recipes found!</div>;
  }

  return (
    <div className={styles.recipeGrid}>
      {data.map((recipe) => (
        <RecipeCard recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
};

export default Recipe;