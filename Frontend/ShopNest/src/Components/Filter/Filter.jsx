import React, { useState, useEffect, useContext } from 'react'
import './Filter.css'
import Slider from 'react-slider'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { AppContext } from '../../Context/ParentContext';

const MIN = 0;
const MAX = 4000;

function Filter() {

    const { register,reset } = useForm();

    const [values, setValues] = useState([MIN, MAX])
    const [products, setProducts] = useState([])
    const { filteredProducts, setFilteredProducts } = useContext(AppContext)
    const [productsWithoutFilter, setProductsWithoutFilter] = useState([])


    const sizeOptions = ["Small", "Medium", "Large", "XL", "XXL", "XXXL"];
    const colorOptions = ["Black", "White", "Gray", "Beige", "Brown", "Navy", "Red", "Blue", "Yellow", "Green", "Orange", "Purple", "Light Pink", "Light Blue", "Mint Green", "Lavender"];

    useEffect(() => {
        axios.get(import.meta.env.VITE_PRODUCTS_DATA_KEY)
            .then(response => {
                setProducts(response.data)
                setFilteredProducts(response.data)
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        // Filter products based on price range
        const filtered = products.filter(product => {
            return product.price >= values[0] && product.price <= values[1];
        });
        setProductsWithoutFilter(filtered);
        setFilteredProducts(filtered)
    }, [values]);

    const handleSortChange = (event) => {
        const selectedSortOrder = event.target.id === 'low_to_high' ? 'low_to_high' : 'high_to_low';
        const sortedFiltered = [...productsWithoutFilter];

        // Sort the filtered products based on the selected sorting order
        sortedFiltered.sort((a, b) => {
            if (selectedSortOrder === 'low_to_high') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });
        console.log(sortedFiltered)
        setFilteredProducts(sortedFiltered)
    };

    const handleUnderSortChange = (event) => {
        const selectedSortOrder = event.target.id === 'under_500' ? 'under_500' : 'under_1000';
        if (selectedSortOrder === 'under_500') {
            const filtered = products.filter(product => {
                return product.price <= 500;
            })
            setProductsWithoutFilter(filtered);
            setFilteredProducts(filtered)
        } else {
            const filtered = products.filter(product => {
                return product.price <= 1000;
            })
            setProductsWithoutFilter(filtered);
            setFilteredProducts(filtered);
        }
    };

    const handleCondition = (event) => {
        const currentCondition = event.target.value;
        const sortedConditionedFiltered = [...productsWithoutFilter];
        const filtered = sortedConditionedFiltered.filter(item => {
            if ((item.condition && item.condition == currentCondition) || !item.condition) {
                return item;
            }
        })
        setFilteredProducts(filtered);
    }

    const handleGender = (event) => {
        const currentGender = event.target.value;
        const sortedGenderFiltered = [...productsWithoutFilter];
        const filtered = sortedGenderFiltered.filter(item => {
            if ((item.gender && item.gender == currentGender)) {
                return item;
            }
        })
        setFilteredProducts(filtered);
    }

    const handleSize = (event) => {
        const currentSize = event.target.value;
        const sortedSizeFiltered = [...productsWithoutFilter];
        const filtered = sortedSizeFiltered.filter(item => {
            if ((item.title && item.title == currentSize)) {
                return item;
            }
        })
        setFilteredProducts(filtered);
    }

    const handleColor = (event) => {
        const currentColor = event.target.value;
        const sortedColorFiltered = [...productsWithoutFilter];
        const filtered = sortedColorFiltered.filter(item => {
            if ((item.color && item.color == currentColor)) {
                return item;
            }
        })
        setFilteredProducts(filtered);
    }

    const removeFilters = () => {     
        setValues([MIN, MAX]);    
        reset();
    }



    return (
        <div className="filter_container">

            <div className="price_container">

                <div className='title'>PRICE</div>

                <div className='flex'>
                
                        <div>
                            <input
                                name='under_price'
                                type="radio"
                                id='under_500'
                                {...register("under_price")}
                                onChange={handleUnderSortChange}
                            />
                            <label htmlFor="under_500">Under 500</label>
                            <br />
                            <input
                                name='under_price'
                                type="radio"
                                id='under_1000'
                                {...register("under_price")}
                                onChange={handleUnderSortChange}
                            />
                            <label htmlFor="under_1000">Under 1000</label>
                        </div>
                        <div>
                            <input
                                name='price_radio'
                                type="radio"
                                id='low_to_high'
                                {...register("price_radio")}
                                onChange={handleSortChange}
                            />
                            <label htmlFor="low_to_high">From Low To High</label>
                            <br />
                            <input
                                name='price_radio'
                                type="radio"
                                id='high_to_low'
                                {...register("price_radio")}
                                onChange={handleSortChange}
                            />
                            <label htmlFor="high_to_low">From High To Low</label>
                        </div>
                    </div>

                <div className="slider_container">
                    <p>Current Range : {values[0]} - {values[1]}</p>
                    <Slider
                        className={'slider'}
                        onChange={setValues}
                        value={values}
                        min={MIN}
                        max={MAX} />
                </div>
                <div className="values">
                    <p>0(Min)</p>
                    <p>12000(Max)</p>
                </div>

            </div>

            <div className="property_container">
                <div className='title'>PROPERTY</div>
                <div className='property_flex'>
                    <div className='select_container'>
                        <select onChange={handleCondition}>
                            <option value="">Condition</option>
                            <option value="like_new">Like New</option>
                            <option value="good">Good</option>
                            <option value="acceptable">Acceptable</option>
                        </select>
                        <select onChange={handleGender}>
                            <option value="">Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unisex">Unisex</option>
                        </select>
                    </div>
                    <div className='select_container'>
                        <select onChange={handleSize}>
                            <option value="">Size</option>
                            {sizeOptions.map((size, index) => (
                                <option key={index} value={size}>{size}</option>
                            ))}
                        </select>
                        <select onChange={handleColor}>
                            <option value="">Color</option>
                            {colorOptions.map((color, index) => (
                                <option key={index} value={color}>{color}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="reset_container">
                <div className='title'>REMOVE FILTERS</div>
                <button onClick={removeFilters} className='remove_filter_button'>Remove Filters</button>
            </div>

        </div>
    )
}

export default Filter