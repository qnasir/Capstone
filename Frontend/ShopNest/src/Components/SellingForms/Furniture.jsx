import React from 'react'
import './Electrical.css'

function Furniture() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR FURNITURE</h2>
                <form>
                    <label>
                        Furniture Type:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Brand/Title:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Material:
                        <input type="text" />
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
                        <textarea name="furniture_description"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Furniture