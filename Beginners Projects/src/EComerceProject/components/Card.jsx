import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

function Card() {
  return (
    <section className='card'>
      <img 
        className='card-img'
        src="https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg" alt="Shoe Image" />

      <div className="card-details">
        <h3 className='card-title'>Shoe</h3>

        <section className='card-reviews'>
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' />
          <span className='total-reviews'>4</span>
        </section>

        <section className='card-price'>
          <div className="price">
            <del>$300</del> $200
          </div>
          <div className="bag">
            <BsFillBagFill className='bag-icon'/>
          </div>
          </section>

      </div>
    </section>
  )
}

export default Card;
