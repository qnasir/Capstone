import React from 'react'
import './Electrical.css'

function Gadgets() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR GADGET</h2>
                <form>
                    <label>
                        Product Name:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Brand/Model:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Category:
                        <select>
                            <option value="smartphone">Smartphone</option>
                            <option value="laptop">Laptop</option>
                            <option value="tablet">Tablet</option>
                            <option value="camera">Camera</option>
                            <option value="wearable">Wearable</option>
                            <option value="other">Other</option>
                        </select>
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
                        <textarea name="gadget_description"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Gadgets