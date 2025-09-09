import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    fetch('http://localhost:8080/products')
      .then(res => res.json())
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <>
     {
      products && products.length > 0 && products.map((product)=>(
        <div key={product._id}>
          <h2>{product.name}</h2>
          <p>$ {product.price}</p>
          <p>{product.description}</p>
        </div>
      ))
     }
    </>
  )
}

export default App
