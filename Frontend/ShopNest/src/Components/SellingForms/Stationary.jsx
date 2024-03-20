import React from 'react'
import './Electrical.css'

function Stationary() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR STATIONERY</h2>
                <form>
                    <label>
                        Item Type:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Brand (if applicable):
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
                        <textarea name="stationery_description"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Stationary