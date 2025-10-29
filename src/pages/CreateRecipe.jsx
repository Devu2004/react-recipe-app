// src/pages/CreateRecipe.jsx

import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
import { toast } from "react-toast";
import { useNavigate } from "react-router-dom";
import styles from "./CreateRecipe.module.css"; // <-- 1. IMPORT THE CSS

const CreateRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipeContext);
  const { register, handleSubmit, reset } = useForm();

  const submitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data];
    copydata.push(recipe);
    setdata(copydata);
    toast.success("Recipe Created!");
    reset();
    navigate("/recipe");
  };

  return (
    <>
      {/* 2. APPLY THE CLASSNAMES */}
      <div className={styles.mainFormContainer}>
        <h1 className={styles.formTitle}>Create a New Recipe</h1>
        <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
          <input
            type="url"
            {...register("img")}
            placeholder="Enter url of image"
            className={styles.input}
          />
          <input
            type="text"
            {...register("title")}
            placeholder="Recipe Name"
            className={styles.input}
          />
          <input
            type="text"
            {...register("chef")}
            placeholder="Chef name"
            className={styles.input}
          />
          <small className={styles.errorMessage}>
            This is error message will shown here
          </small>

          <textarea
            placeholder="Enter Recipe Description"
            {...register("desc")}
            className={styles.textarea}
          ></textarea>
          <textarea
            placeholder="Enter Ingredients"
            {...register("ingr")}
            className={styles.textarea}
          ></textarea>
          <textarea
            placeholder="Enter Instruction"
            {...register("inst")}
            className={styles.textarea}
          ></textarea>

          <select {...register("category")} className={styles.select}>
            <option value="breakfast">cat-1</option>
            <option value="brunch">cat-2</option>
            <option value="lunch">cat-3</option>
            <option value="supper">cat-4</option>
            <option value="dinner">cat-5</option>
          </select>

          <button className={styles.submitButton}>Save Recipe</button>
        </form>
      </div>
    </>
  );
};

export default CreateRecipe;