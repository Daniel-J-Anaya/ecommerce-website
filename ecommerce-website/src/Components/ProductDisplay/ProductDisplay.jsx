import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_icon_dull from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const {product} = props;
  const productTags = product.tags.map(tag =>  `${tag}`).join(', ');
  const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-hero' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-stars">
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon} alt="star icon" />
          <img src={star_icon_dull} alt="star icon dull" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-prices">
          <div className="productdisplay-price-old">${product.old_price}</div>
          <div className="productdisplay-price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-desc">{product.description}</div>
        <div className="productdisplay-size">
          <h1>Select Size</h1>
          <div className="productdisplay-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-tags"><span>Tags:</span> {productTags}</p>
      </div>
    </div>
  )
}

export default ProductDisplay
