// import Counter from "./Counter/Counter.jsx"
// import Todo from "./Todo/Todo.jsx"
// import Meals from "./Meals/Meals.jsx"
// import Calculator from "./Calculator/Calculator.jsx"
// import ToggleBackgroundColor from "./ToggleBackgroundColor/ToggleBackgroundColor.jsx"
// import HiddenSearchBar from "./HiddenSearchBar/HiddenSearchBar.jsx"
// import Testimonials from "./Testimonials/Testimonials.jsx"

// import { accordionData } from './components/utils/content'
// import Accordion from "./components/Accordion"

//import Form from "./components/Form"

// ECOMERCE
import './index.css'
import { useState } from "react"
import Sidebar from "./EComerceProject/components/Sidebar/Sidebar"
import Navigation from "./EComerceProject/navigation/Nav"
import Products from "./EComerceProject/Products/Products"
import Recommended from "./EComerceProject/Recommended/Recommended"

import data from './EComerceProject/db/data.js'
import Card from "./EComerceProject/components/Card"


const App = () => {
  // EComerce states
  const [selectedCategory, setSelectedCategory]  = useState(null)
  const [query, setQuery] = useState("")

  // ___________ Input Filter ___________ 
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = data.filter(
    (data) => 
    data.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1 )

  // ___________ Radio Filter ___________ 
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  
  // ___________ BTNs Filter ___________ 
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(data, selected, query){
    let filteredProducts = data
    
    // filtering Input items
    if(query){
      filteredProducts = filteredItems
    }

    // Selected Filter
    if(selected){
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => 
        category === selected || 
        color === selected    || 
        company === selected  ||
        newPrice === selected ||
        title === selected)
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) =>(
      <Card 
        key={Math.random()}
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
        />
    ))
  }


  const result = filteredData(data, selectedCategory, query)

  return (
    <>
     {/* TO SEE THE PROJECTS YOU MUST:

      1º COMMENT THE 'ECOMMERCE PROJECT' TILL 'ECOMERCE PROJECT END';
      2º UNCOMMENT WHAT PROJECT COMPONENT YOU WANT TO SEE;
      3º UNCOMMENT THE IMPORT CORRESPONDENT FILE;
      4º RUN -> npm run dev TO SEE THE PROJECT IN THE BROWSER;
      
      TO SEE NEXT PROJECT COMMENT THE PREVIOUS COMPONENT AND IMPORT.
     
     */}
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <Meals /> */}
      {/* <Calculator />  */}
      {/* <ToggleBackgroundColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testimonials /> */}


      {/* <div className="accordion">
        {accordionData.map(({title, content}) => (
          <Accordion title={title} content={content} key={Math.random()}/>
      ))}
      </div> */}

      {/* <Form /> */}

      {/* ECOMERCE PROJECT */}
      
      <Sidebar handleChange={handleChange} />
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
      />
      <Recommended 
        handleClick={handleClick}
      />
      <Products
        result={result}
      /> 
      {/* ECOMERCE PROJECT END */}
      
    </>
  )
}

export default App