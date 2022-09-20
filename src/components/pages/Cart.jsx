import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import {remove} from '../store/cartSlice'
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);
  const handleRemove = (productId)=>{
    dispatch(remove(productId))
  }
  return (
    <>
      <h2>Cart Items</h2>
      <div className="productsWrapper">
      {cartItems.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" srcSet="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button  className='btn' onClick={()=> handleRemove(product.id)} > Remove</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Cart