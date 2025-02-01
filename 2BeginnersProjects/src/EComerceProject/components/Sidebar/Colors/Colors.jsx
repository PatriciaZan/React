import Input from '../../Input';
import './Colors.css'

 function Colors({ handleChange}) {
  return (
    <div>
      <h2 className='sidebar-title color-title'>Colors</h2>
      
      <label className='sidebar-label-container'>
        <input 
          onChange={handleChange}
          value=""
          name='test1'
          type="radio" />
          <span className='checkmark  all'></span>All
      </label>

      <Input 
        handleChange={handleChange}
          value="black"
          title="Black"
          name="test1"
          color="black"
      />

      <Input 
        handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
      />

      <Input 
        handleChange={handleChange}
          value="red"
          title="Red"
          name="test1"
          color="red"
      />

      <Input 
        handleChange={handleChange}
          value="green"
          title="Green"
          name="test1"
          color="green"
      />

      <Input 
        handleChange={handleChange}
          value="white"
          title="White"
          name="test1"
          color="white"

          style={{ border: "2px solid black"}}
      /> 
       {/* <label className='sidebar-label-container'>
        <input 
          type="radio"
          onChange={handleChange}
          value="white"
          name="test1"
          />
        <span 
          className="checkmark" 
          style={{background: "white", border: "2px solid black"}}></span>White

      </label>  */}

      


      {/* <label className="sidebar-label-container color-title">
        <input type="radio" name='test2'/>
        <span className="checkmark"></span>All
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2'/>
        <span className="checkmark"></span>Black
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2'/>
        <span className="checkmark"></span>Blue
      </label>
            
      <label className="sidebar-label-container">
        <input type="radio" name='test2'/>
        <span className="checkmark"></span>Red
      </label>

      <label className="sidebar-label-container">
        <input type="radio" name='test2'/>
        <span className="checkmark"></span>Green
      </label>
            
      <label className="sidebar-label-container">
        <input type="radio" name='test2'/>
        <span className="checkmark"></span>White
      </label> */}

    </div>
  )
}

export default Colors;
