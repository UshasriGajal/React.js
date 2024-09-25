import React from 'react'
import {Link, useSearchParams } from 'react-router-dom'
// import Product from './Product';
// import (link, useSearchParams)

const product =[
    {id:1, name:'Laptop' , category: 'Electronics'},
    {id:2, name:'Mobiles' , category: 'Electronics'},
    {id:3, name:'Speakers' , category: 'Electronics'},
    {id:4, name:'Shirts' , category: 'Clothing'},
    {id:5, name:'Trousers' , category: 'Clothing'}
]
const Home = () => {
    const [searchParams , setSearchParams] = useSearchParams();
    const category =searchParams.get('category')
    const filteredProducts =category? product.filter((p) => p.category === category) : product
    console.log(filteredProducts)

  return (
    <>
      <h1>Home Page</h1>
      <button onClick={() => setSearchParams({category: 'Electronics'})}>Electronics</button>
      <button onClick={() => setSearchParams({category: 'Clothing'})}>Clothing</button>
      <button onClick={() => setSearchParams({})}>All Products</button>

      <ul>
        
           {filteredProducts.map((item)=>(
            <li key={item.id}>
                <Link to={`/product/${item.id}`}>{item.name}</Link>
            </li>
           ))}
      </ul>
    </>
  )
}

export default Home
