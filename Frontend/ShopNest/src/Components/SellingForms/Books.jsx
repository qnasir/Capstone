import React from 'react'
import './Electrical.css'

function Books() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR BOOK</h2>
                <form>
                    <label>
                        {/* Book Name */}
                        Book Title:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Author(s):
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Publisher:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Edition:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        ISBN (if available):
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
                        <textarea name="book_description"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Books