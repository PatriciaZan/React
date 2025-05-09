import React from 'react'

const IngredientsList = (props) => {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))


  return (
    <section>
            <h2>Ingredients on Hand:</h2>
            <ul className='ingredients-list' aria-live='polite'>{ingredientsListItems}</ul>

           {props.ingredients.length > 3 && <div className='get-recipe-container'>
                <div ref={props.ref}> 
                    <h3>Ready for a recipe?</h3>
                    <p>Genarate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.toogleRecipeShown}>Get a recipe</button>
            </div>} 

        </section>
  )
}

export default IngredientsList

