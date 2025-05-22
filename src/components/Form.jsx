import React from "react";
import "./form.css";
import SectionA from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from '../ai';

const Form = () => {
  const [ingredient, setIngredient] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");
  const [clicked, setClicked] = React.useState(false);

  const things = ingredient.map(thing => <li key={thing} className="ingredient-item">{thing} <button className="X-button" id={thing} onClick={() => remove(thing)}>X</button></li>);

  function remove(id) {
    setIngredient(prevIngredients => prevIngredients.filter(item => item !== id));
  }

  function capitalizeFirstLetter(string) {
    if (string.length === 0) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient.trim() !== "") {
      const newIngredientNew = capitalizeFirstLetter(newIngredient.trim());
      setIngredient(prev => [...prev, newIngredientNew]);
    }
  }


  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredient)
    setRecipe(recipeMarkdown)
  }

  function HandleClickGenerate() {
    getRecipe();
    setClicked(true);
  }

  return (
    <>
      <form className="form-container" action={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          name="ingredient"
          required
        />
        <button type="submit">+ Add Ingredient</button>
      </form>

      <IngredientsList
        listLength={ingredient.length}
        thing={things}
        getRecipe={HandleClickGenerate}
        />
      {clicked ? (
  recipe ? <SectionA recipe={recipe} /> : <p>Generating recipe...</p>
) : null}
    </>
  );
};

export default Form;