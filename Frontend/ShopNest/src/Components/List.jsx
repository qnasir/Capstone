import axios from 'axios'
import Products from './Product/Products/Products'
import { useEffect, useState } from "react"

function List() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_PRODUCTS_DATA_KEY)
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