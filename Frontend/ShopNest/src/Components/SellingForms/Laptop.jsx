import React from 'react'
import './Electrical.css'

function Laptop() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR LAPTOP</h2>
                <form>
                    <label>
                        Laptop Company:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        {/* Product Name */}
                        Brand/Model:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Processor:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        RAM:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Storage:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Screen Size:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Operating System:
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
                        <textarea name="laptop_description"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Laptop