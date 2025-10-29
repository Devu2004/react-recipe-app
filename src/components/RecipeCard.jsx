// src/components/RecipeCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import styles from "./RecipeCard.module.css"; 

const RecipeCard = (props) => {
  const { id, img, title, desc, chef } = props.recipe;
  return (
    <>
      <Link to={`/recipe/details/${id}`} className={styles.card}>

        <img src={img} alt={title} className={styles.cardImage} />

        <div className={styles.cardBody}>
          <h1 className={styles.cardTitle}>{title}</h1>
          <small className={styles.cardChef}>{chef}</small>
          <p className={styles.cardDesc}>
            {desc.slice(0, 100)}... <small>more</small>
          </p>
        </div>
      </Link>
    </>
  );
};

export default RecipeCard;