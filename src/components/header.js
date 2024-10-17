import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import iconCart from "../assets/images/iconCard.png"
import { useSelector, useDispatch } from 'react-redux'
import { toggleStatusTab } from '../stores/cart'

const Header = () => {

  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector(store => store.cart.items);
  console.log("carts : ", carts);

  const dispatch = useDispatch();

  useEffect(() => {
    let total = 0;
    carts.map(item => total += item.quantity);
    setTotalQuantity(total)
  }, [carts])

  const handleOpenCart = () => {
    dispatch(toggleStatusTab())
  }
// tess
  return (
    <header className='flex justify-between items-center mb-5'>
      <Link to="/" className='text-xl font-bold'>CEOJASSS STORE</Link>
      <div className='w-10 h-10 bg-gray-100 rounded-full flex justify-center items-center relative' onClick={handleOpenCart}>
        <img src={iconCart} alt="" className='w-6' />
        <span className='absolute top-2/3 right-1/2 bg-yellow-500 text-black font-semibold text-sm w-5 h-5 rounded-full flex justify-center items-center'>{totalQuantity}</span>
      </div>
    </header>
  )
}

export default Header