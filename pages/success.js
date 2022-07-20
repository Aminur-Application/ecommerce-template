
import React,{useState, useEffect} from 'react'
import Link from 'next/link';
import {BsBagCheckFill} from 'react-icons/bs'
import { useRouter } from 'next/router'
import { useStateContext } from '../context/stateContext.js'
import { runFireworks } from '../lib/utils.js';

const success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, [])
  const [order, setOrder] = useState(null);
  return (
    <div className='success-wrapper'>
      <div className='success'>
        <p className='icon'>
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className='email-msg'>Check your email inbox for your receipt</p>
        <p className='description'>
          if you have any questions, please email
          <a className='email' href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn"> Continue Shopping</button>

        </Link>
      </div>  
    </div>
  )
}

export default success