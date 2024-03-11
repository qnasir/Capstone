import axios from 'axios'
import Products from './Product/Products/Products'
import { useEffect, useState } from "react"

function List() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://capstone-tn3i.onrender.com/product-route')
            .then(response => setProducts(response.data))
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='grid_parent'>
            {products.map((product) => {
                return (
                    <>
                        <Products key={product._id} product={product} />
                    </>
                )
            })}
        </div>
    )
}

export default List