import Sidebar from '../Sidebar/Sidebar'
import Product from '../Product/Product'
import './Homepage.css'
import { useState } from 'react'

function Homepage() {

    const [selectedCategory, setSelectedCategory]= useState(null)

    const handleCategory = (item) => {
        setSelectedCategory(item)    
    }

    return (

        <div className='homepage'>
            <div className='flex'>
                <Sidebar handleCategory={handleCategory} />
                <Product selectedCategory={selectedCategory} />
            </div>
        </div>

    )
}

export default Homepage