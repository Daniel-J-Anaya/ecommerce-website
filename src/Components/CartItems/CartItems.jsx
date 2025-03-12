import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import minus_icon from '../Assets/minus_icon.png'
import plus_icon from '../Assets/plus_icon.png'

const CartItems = () => {

  const {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount} = useContext(ShopContext) 

  return (

    <div className='cartitems'>

      <div className="cartitems-main">
        <p>Products</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>

      <hr />

      {all_products.map((e)=>{
        if(cartItems[e.id]>0) {
          return <div>
            <div className="cartitems-format cartitems-main">
              <img src={e.image} alt="product" className='carticon-product'/>
              <p className='cartitem-name'>{e.name}</p>
              <p>${e.new_price}</p>
              <div className="cartitems-qty-container">
                <img className='carticon-remove' src={minus_icon} onClick={()=>{removeFromCart(e.id)}} alt="remove icon" />
                <button className='cartitems-qty'>{cartItems[e.id]}</button>
                <img className='carticon-remove' src={plus_icon} onClick={()=>{addToCart(e.id)}} alt="add icon" />
              </div>
              <p>${e.new_price*cartItems[e.id]}</p>
            </div>
            <hr />
          </div>
        }
        return null;
      })}

      <div className="cartitems-details">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal:</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-promo">
              <p>Add coupon code (optional)</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder='promo code'/>
                <button>Apply</button>
              </div>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Check Out</button>
        </div>
        
      </div>
    </div>
  )
}

export default CartItems
