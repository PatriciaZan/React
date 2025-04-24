import React from 'react'

const Main = () => {
    const ingredients = ['Chicken', 'Oregano', 'Tomatoes']

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault();
        // console.log("Submited!!!");
        const formData = new formData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
    }
  return (
    <main>
        <form className='add-ingredient' onSubmit={handleSubmit}>
            <input 
                aria-label='Add Ingredient' 
                type='text'
                placeholder='oregano'
                name='ingredient'
            />
            <button>+ Add Ingredient</button>
        </form>
        <ul>
            {ingredientsListItems}
        </ul>
    </main>
  )
}

export default Main