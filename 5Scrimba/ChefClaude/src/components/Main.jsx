import React, { useState } from 'react'
import Recipe from './recipe';
import IngredientsList from './IngredientsList';
import { useRef } from 'react';
import { useEffect } from 'react';

const Main = () => {
    const [ingredients, setIngredients] = useState(
        ["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [recipeShown, setRecipeShown] = useState(false);
    const recipeSection = useRef(null)
    //console.log(recipeSection);

    useEffect(() => {
        if(recipeShown !== "" && recipeSection.current !== null){
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipeShown])
    


    function addIngredient(event){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toogleRecipeShown(){
        setRecipeShown(prevShown => !prevShown)
    }

  return (
    <main>
        <form className='add-ingredient' action={addIngredient}>
            <input 
                aria-label='Add Ingredient' 
                type='text'
                placeholder='oregano'
                name='ingredient'
            />
            <button>+ Add Ingredient</button>
        </form>
        {ingredients.length > 0 && 
        <IngredientsList 
            ref={recipeSection}
            ingredients={ingredients} 
            toogleRecipeShown={toogleRecipeShown} />}

        {recipeShown && <Recipe />}


    </main>
  )
}

export default Main


// async function getRecipe(){
//     const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
//     console.log(recipeMarkdown);
    
// }