import React, { useState } from 'react'
import './Filter.css'
import Slider from 'react-slider'

const MIN = 0;
const MAX = 120000

function Filter() {

    const [values, setValues] = useState([MIN, MAX])
    console.log("Values:", values)

    return (
        <div className="filter_container">

            <div className="price_container">

                <div className='title'>PRICE</div>

                <div className='flex'>
                    <div>
                        <input type="radio" id='under_500' />
                        <lable htmlFor="under_500">Under 500</lable>
                        <br />
                        <input type="radio" id='under_1000' />
                        <lable htmlFor="under_1000">Under 1000</lable>
                    </div>
                    <div>
                        <input type="radio" id='low_to_high' />
                        <lable htmlFor="low_to_high">From Low To High</lable>
                        <br />
                        <input type="radio" id='high_to_low' />
                        <lable htmlFor="high_to_low">From High To Low</lable>
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
                        <select>
                            <option className='option' value="">Condition</option>
                            <option value="like_new">Like New</option>
                            <option value="good">Good</option>
                            <option value="acceptable">Acceptable</option>
                        </select>
                        <select>
                            <option value="">Gender</option>
                            <option value="like_new">Like New</option>
                            <option value="good">Good</option>
                            <option value="acceptable">Acceptable</option>
                        </select>
                    </div>
                    <div className='select_container'>
                        <select>
                            <option value="">Size</option>
                            <option value="like_new">Like New</option>
                            <option value="good">Good</option>
                            <option value="acceptable">Acceptable</option>
                        </select>
                        <select>
                            <option value="">Color</option>
                            <option value="like_new">Like New</option>
                            <option value="good">Good</option>
                            <option value="acceptable">Acceptable</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="reset_container">
                <div className='title'>REMOVE FILTERS</div>
                <button className='remove_filter_button'>Remove Filters</button>
            </div>

        </div>
    )
}

export default Filter