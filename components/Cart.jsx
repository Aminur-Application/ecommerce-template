import React from 'react'
import Link from 'next/link';
import {AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping} from 'react-icons/ai';
import {AiOutlineDelete} from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useStateContext } from '../context/stateContext';
import { urlFor } from '../lib/client';
import { Product } from '.';

const Cart = () => {
  const {totalPrice, totalQuantities, cartItems, setShowCart, toggleCartItemQuantity} = useStateContext();
  return (
    <div className='cart-wrapper' >
      <div className='cart-container'>
        <button type='button' className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className='heading'> Your Cart </span>
          <span className='cart-num-items'> ({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className='empty-cart'>
            <AiOutlineShopping size={150} />
            <h3>Your Cart is empty</h3>
            <Link href="/">
              <button type='button' className='btn' onClick={() => setShowCart(false)}>
                Continue Browsing
              </button>
            </Link>
          </div>
        )}

        <div className='product-container'>
          {cartItems.length >= 1 && cartItems.map((item, index) => (
            <div className='product' key={item._id}> 
              <img src={urlFor(item?.image[0])} className='cart-product-image'/>
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>{item.name}</h5>
                  <h4>£{item.price}</h4>
                </div>
                <div className='flex bottom'>
                  <div>
                    <p className='quantity-desc'>
                    <span className='minus' onClick={() => toggleCartItemQuantity(item._id, 'dec')}>
                      <AiOutlineMinus/>
                    </span>
                    <span className='num' onClick="">
                      {item.quantity}
                    </span>
                    <span className='plus' onClick={() => toggleCartItemQuantity(item._id, 'inc')}>
                      <AiOutlinePlus/> 
                    </span>
                    </p>
                  </div>
                  <button type='button' className='remove-item' onClick="">
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {cartItems.length >= 1 && (
            <div className='cart-bottom'>
              <div className='total'>
                <h3>SubTotal:</h3>
                <h3>£{totalPrice}</h3>
              </div>
              <div className='btn-container'>
                <button type='button' className='btn' onClick=''>
                  Pay with Stripe
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart