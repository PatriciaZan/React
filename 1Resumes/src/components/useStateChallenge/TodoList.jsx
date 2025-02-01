import { useState } from "react"

const TodoList = () => {
    const [items, setItems] = useState([])
    const [inputValue, setInputValue] = useState('')


    const handleSubmit = e => {
        e.preventDefault()
        if(inputValue.trim()){
            setItems([...items, inputValue])
            setInputValue('')
        }
    }

    const handleChange = e => {
        setInputValue(e.target.value)
    }

  return (
    <div>
        <h1>List: {items}</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder="add item"/>

            <button type="submit">Add Item</button>
        </form>

        <ul>
            {items.map((items, index) => (
                <li key={index}>{items}</li>

            ))}
        </ul>
    </div>
  )
}

export default TodoList