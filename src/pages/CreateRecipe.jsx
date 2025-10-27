import { nanoid } from "nanoid";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { recipeContext } from "../context/RecipeContext";
const CreateRecipe = () => {
  const{data,setdata} = useContext(recipeContext)
  const { register, handleSubmit , reset } = useForm();
  const submitHandler = (recipe) => {
    recipe.id = nanoid()
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata)
    reset()
    
  };
  return (
    <>
      <div className="mainFormContainer">
        <div className="formContainer">
          <form onSubmit={handleSubmit(submitHandler)}>
            <input
              type="text"
              {...register("title")}
              placeholder="Recipe Name"
            />
            <input
              type="text"
              {...register("chef")}
              placeholder="chef name"
            />
            <small>This is error message will shown here</small>
            <input type="url"
            {...register("image")}
            placeholder="Enter url of image"
            />
            <textarea placeholder="Enter Recipe Description" {...register("description")}></textarea>
            <textarea placeholder="Enter Ingredients" {...register("ingredients")}></textarea>
            <textarea placeholder="Enter Instruction" {...register("instruction")}></textarea>
            <select {...register('category')}>
              <option value="c1">cat-1</option>
              <option value="c2">cat-2</option>
              <option value="c3">cat-3</option>
            </select>
            <button>Save Recipe</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateRecipe;
