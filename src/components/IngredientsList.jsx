import React from 'react'
import './form.css'
export default function IngredientsList(props){
    return(
        <>
        {props.listLength>0 && <div className="showAdded">
        <div className="show-ingredients">
          <h2 className="ingredientH2">Ingredients on hand: </h2>
          <ul>
            {props.thing}
          </ul>
        </div>
      </div>}
      {props.listLength<4 && props.listLength>0 &&
      <p className="warning">Add atleast 4 ingredients to genrate a recipe</p>
    }
      {props.listLength>=4 && 
      <div className="showGenerator">
        <div className="get-recipe">
          <div className="get-recipe-left">
            <h4>Ready for a recipe?</h4>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <div className="get-recipe-right">
            <button onClick={props.getRecipe}>Generate</button>
          </div>
        </div>
      </div>}
    </>
    )
}