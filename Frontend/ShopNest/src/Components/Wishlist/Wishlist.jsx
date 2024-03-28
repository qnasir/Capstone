import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Wishlist.css'

function Wishlist() {

  const [wishProducts, setWishProducts] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {

    // Fetching product ids from user id
    const fetchProductIds = async () => {
      try {
        const userId = localStorage.getItem('userId')
        const response = await axios.get(`http://localhost:3000/product-route/wishlist/${userId}`)
        console.log(response.data)
        setWishProducts(response.data)
      } catch (err) {
        console.error(err)
      }
    }
    fetchProductIds()

    // Fetching products by their ids
    const fetchingProduts = async () => {
      const fetchedProducts = [];
      try {
        for (const [index, productIds] of wishProducts.entries()) {
          const response = await axios.get(`https://capstone-tn3i.onrender.com/product-route/product/${productIds}`)
          fetchedProducts.push(response.data)
          console.log(products)
        }
        setProducts(fetchedProducts)
      } catch (err) {
        console.error(err)
      }
    }
    
    fetchingProduts()

  }, [])

  return (
    <div className="grid_parent_wishlist">
      {products.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.location}</p>
            <p>{product.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Wishlist