import axios from 'axios'
import Product from './Product/Product'
import { useEffect,useState } from "react"



function List() {

    const [products,setProducts] = useState([])

    useEffect(() => {
        axios.get('https://capstone-tn3i.onrender.com/product-route')
        .then(response => setProducts(response.data))
        .catch(err => console.log(err))
    })

  return (
    <div>List</div>
  )
}

export default List