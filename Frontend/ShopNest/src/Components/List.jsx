import axios from 'axios'
import Products from './Product/Products/Products'
import { useEffect, useState } from "react"

function List({products}) {


    return (
        <div className='grid_parent'>
            {products && products.map((product) => {
                return (
                        <Products key={product._id} product={product} />
                )
            })}
        </div>
    )
}

export default List