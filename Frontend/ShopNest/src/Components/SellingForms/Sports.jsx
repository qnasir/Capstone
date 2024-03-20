import React from 'react'
import './Electrical.css'

function Sports() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SPORTS EQUIPMENT</h2>
                <form>
                    <label>
                        Product Name:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Brand/Title:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Size (if applicable):
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
                        <textarea name="sports_equipment_description"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Sports