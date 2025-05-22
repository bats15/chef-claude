import React from "react";
import "./form.css";
import SectionA from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from '../ai';

const Form = () => {
  const [ingredient, setIngredient] = React.useState([]);
  const [recipe, setRecipe] = React.useState("");

  const things = ingredient.map(thing => <li key={thing}>{thing}</li>);

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
        getRecipe={getRecipe}
      />
      {recipe && <SectionA recipe={recipe} />}
    </>
  );
};

export default Form;