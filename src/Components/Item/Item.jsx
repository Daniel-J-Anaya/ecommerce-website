import React, {useContext} from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import star_icon from '../Assets/star_icon.png'
import star_icon_dull from '../Assets/star_dull_icon.png'

export const Item = (props) => {
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      <p>{props.name}</p>
      <div className="item-stars">
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon_dull} alt="star icon dull" />
          <p>(122)</p>
        </div>
      <div className="item-price">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
      <div className="add-to-cart">
      <button onClick={()=>{addToCart(props.id)}}>ADD TO CART</button>
      </div>
    </div>
  )
}

export default Item
