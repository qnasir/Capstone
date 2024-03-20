import React from 'react'
import './Electrical.css'

function Clothes() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR CLOTHES</h2>
                <form>
                    <label>
                        Product Name:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Brand:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Size:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Gender:
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unisex">Unisex</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Color:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Condition:
                        <select>
                            <option value="like_new">Like New</option>
                            <option value="good">Good</option>
                            <option value="acceptable">Acceptable</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Price:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea name="clothes_description"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Clothes