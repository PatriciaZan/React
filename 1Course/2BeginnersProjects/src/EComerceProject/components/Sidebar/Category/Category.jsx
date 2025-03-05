/* eslint-disable react/no-unknown-property */
import Input from '../../Input'
import './Category.css'

 function Category({ handleChange }) {
  return (
    <div>
      <h2 className="side-bar">Category</h2>

      <div>
        <label className='sidebar-label-container'>
          <input 
            onChange={handleChange}
            value=""
            name='test'
            type="radio" />
            <span className='checkmark'></span>All
        </label>
        
        <Input 
         handleChange={handleChange}
         value="sneakers"
         title="Sneakers"
         name="test" />

        <Input 
         handleChange={handleChange}
         value="flats"
         title="Flats"
         name="test" />

        <Input 
         handleChange={handleChange}
         value="sandals"
         title="Sandals"
         name="test" />

        <Input 
         handleChange={handleChange}
         value="heels"
         title="Heels"
         name="test" />
        
        {/* <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>All
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>Sneakers
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>Flats
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>Sandals
        </label>

        <label className="sidebar-label-container">
          <input type="radio" name='test'/>
          <span className="checkmark"></span>Heels
        </label> */}
      </div>
    </div>


  )
}

export default Category
