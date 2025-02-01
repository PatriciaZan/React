import { AiFillStar } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className='card'>
      <img 
        className='card-img'
        src={img}
        alt={title} />

      <div className="card-details">
        <h3 className='card-title'>{title}</h3>

        <section className='card-reviews'>
          {/* {star} */}
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' /> 
          <AiFillStar className='ratings-start' />
          <span className='total-reviews'>{reviews}</span>
        </section>

        <section className='card-price'>
          <div className="price">
            <del>{prevPrice}</del> {newPrice}
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
