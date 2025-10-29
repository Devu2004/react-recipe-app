// src/pages/SingleRecipe.jsx

import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toast";
import styles from "./SingleRecipe.module.css"; // <-- 1. IMPORT THE CSS

const SingleRecipe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipeContext);

  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit } = useForm();

  const submitHandler = (updatedRecipe) => {
    const recipeIndex = data.findIndex((r) => params.id == r.id);
    const copydata = [...data];
    copydata[recipeIndex] = { ...copydata[recipeIndex], ...updatedRecipe };
    setdata(copydata);
    toast.success("Recipe updated successfully!");
  };

  const deleteHandler = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      const filteredData = data.filter((r) => params.id != r.id);
      setdata(filteredData);
      toast.success("Recipe deleted successfully!");
      navigate("/recipe"); 
    }
  };

  return recipe ? (
    <div className={styles.pageContainer}>
      <div className={styles.recipeDisplay}>
        <h1 className={styles.recipeTitle}>{recipe.title}</h1>
        <img
          src={recipe.img}
          alt={recipe.title}
          className={styles.recipeImage}
        />
        <p className={styles.recipeChef}>By: {recipe.chef}</p>
        <p className={styles.recipeDesc}>{recipe.desc}</p>

        <h2 className={styles.sectionTitle}>Ingredients</h2>
        <p className={styles.recipeList}>{recipe.ingr}</p>

        <h2 className={styles.sectionTitle}>Instructions</h2>
        <p className={styles.recipeList}>{recipe.inst}</p>
      </div>

      <form onSubmit={handleSubmit(submitHandler)} className={styles.editForm}>
        <h2 className={styles.formTitle}>Update Recipe</h2>

        <input
          type="url"
          {...register("img")}
          placeholder="Enter url of image"
          defaultValue={recipe.img}
          className={styles.input}
        />
        <input
          type="text"
          {...register("title")}
          placeholder="Recipe Name"
          defaultValue={recipe.title}
          className={styles.input}
        />
        <input
          type="text"
          {...register("chef")}
          placeholder="Chef name"
          defaultValue={recipe.chef}
          className={styles.input}
        />

        <textarea
          placeholder="Enter Recipe Description"
          {...register("desc")}
          defaultValue={recipe.desc}
          className={styles.textarea}
        ></textarea>

        <textarea
          placeholder="Enter Ingredients"
          {...register("ingr")}
          defaultValue={recipe.ingr}
          className={styles.textarea}
        ></textarea>

        <textarea
          placeholder="Enter Instruction"
          {...register("inst")}
          defaultValue={recipe.inst}
          className={styles.textarea}
        ></textarea>

        <select
          {...register("category")}
          defaultValue={recipe.category}
          className={styles.select}
        >
          <option value="breakfast">cat-1</option>
          <option value="brunch">cat-2</option>
          <option value="lunch">cat-3</option>
          <option value="supper">cat-4</option>
          <option value="dinner">cat-5</option>
        </select>

        <div className={styles.buttonContainer}>
          <button type="submit" className={`${styles.button} ${styles.updateButton}`}>
            Update Recipe
          </button>
          <button
            type="button"
            onClick={deleteHandler}
            className={`${styles.button} ${styles.deleteButton}`}
          >
            Delete Recipe
          </button>
        </div>
      </form>
    </div>
  ) : (
    "loading..."
  );
};

export default SingleRecipe;