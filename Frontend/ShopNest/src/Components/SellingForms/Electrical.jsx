import React from 'react'
import './Electrical.css'

function Electrical() {
    return (
        <>
            <div className='main'>
                <div className="add-product-container">
                    <h2>ELECTRICAL APPLIANCE</h2>
                    <form>
                        <label>
                            Product Name:
                            <input type="text" />
                        </label>
                        <br />
                        <label>
                            Title:
                            <input type="text" />
                        </label>
                        <br />
                        <label>
                            Brand/Model:
                            <input type="text" />
                        </label>
                        <br />
                        <label>
                            Warranty:
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
                            <textarea name="appliance_description"></textarea>
                        </label>
                        <br />
                        <button className='btn' type="submit">Post Listing</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Electrical