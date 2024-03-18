import React from 'react'
import './Electrical.css'

function Electrical() {
    return (
        <>
            <div className='main'>
                <div className="add-product-container">
                    <h2>FORM</h2>
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
                            Price:
                            <input type="number" />
                        </label>
                        <br />
                        <label>
                            Location:
                            <input  type='text'/>
                        </label>
                        <br />
                        <label>
                            Description:
                            <textarea name="review_content" />
                        </label>
                        <br />
                        <button className='btn' type="submit">Submit Review</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Electrical