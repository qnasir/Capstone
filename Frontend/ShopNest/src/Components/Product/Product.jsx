import './Product.css'
import SearchBar from './SearchBar/SearchBar'
import List from '../List';
import axios from 'axios'
import { useState, useEffect } from 'react';


function Product({selectedCategory}) {

    const [search, setSearch] = useState('')
    const [products, setProducts] = useState([])
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [render, setRender] = useState(true)
    const [productslength, setProductsLength] = useState(0)

    useEffect(()=> {
        if(selectedCategory) {
            console.log(selectedCategory)
            axios.get(`${import.meta.env.VITE_CATEGORY_KEY + selectedCategory}`)
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
            })
            .catch(err => console.log(err))
        }
    }, [selectedCategory])

    useEffect(() => {
        axios.get(import.meta.env.VITE_PRODUCTS_DATA_KEY)
            .then(response => {
                setProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    const handleSearch = (value) => {
        setSearch(value)
    }

    const handleClick = () => {

        axios.get(`${import.meta.env.VITE_SEARCH_KEY + search}`)
            .then(response => {
                console.log(response.data)
                setProducts(response.data)
                setRender(false)
                setProductsLength(response.data.length)
                setShowSearchResult(response.data.length > 0)
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='main_container'>

            <SearchBar search={search} handleSearch={handleSearch} handleClick={handleClick} />

            {showSearchResult ?
                <div className='search_result'>Search Results Found :- {productslength}
                    <button onClick={() => window.location.reload()} className='button'>Clear</button>
                </div> :
                <div className={render ? "none" : "search_result"}>No Result Found
                    <button onClick={() => window.location.reload()} className='button'>Clear</button>
                </div>}

            <List products={products} />

        </div>
    )
}

export default Product