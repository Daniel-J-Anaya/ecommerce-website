import React, { createContext, useState } from "react";
import all_products from '../Components/Assets/all_product'

export const ShopContext = createContext(null);

const getCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}

const ShopContextProvider = (props) => {
  
  const [cartItems, setCartItems] = useState(getCart());

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(const item in cartItems) {
      if(cartItems[item]>0) {
        let itemInfo = all_products.find((product)=>product.id === Number(item))
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItems = 0;
    for(const item in cartItems) {
      if(cartItems[item]>0) {
        totalItems += cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider;
