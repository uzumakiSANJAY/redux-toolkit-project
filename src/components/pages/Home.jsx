import React from 'react'
import Products from '../universalcomp/Products'

const Home = () => {
  return (
    <div>
        <h2 className='heading'>Welcome to the Redux toolkit</h2>
        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home