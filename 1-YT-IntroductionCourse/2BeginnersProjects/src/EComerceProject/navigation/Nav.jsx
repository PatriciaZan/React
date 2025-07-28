import { FiHeart } from 'react-icons/fi'
import { AiOutlineShoppingCart, AiOutlineUserAdd } from 'react-icons/ai'
import './Nav.css'
import { FaHeart } from 'react-icons/fa'


 function Nav({ handleInputChange, query}) {
  return (
    <nav>
      <div className="nav-container">
        <input 
          className='search-input'
          type="text" 
          onChange={handleInputChange}
          value={query}
          placeholder='Enter Your Search Shoes.'/>
      </div>

      <div className="profile-container">
        <a href="#">
          <FaHeart  className='nav-icons'/>
        </a>

        <a href="#">
          <AiOutlineShoppingCart className='nav-icons'/>
        </a>

        <a href="#">
          <AiOutlineUserAdd  className='nav-icons'/>
        </a>

      </div>
    </nav>
  )
}

export default Nav
