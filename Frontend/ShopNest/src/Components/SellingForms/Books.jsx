import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Electrical.css'

function Books() {

    const [data, setData] = useState()

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        if (!data.name || !data.title || !data.publisher || !data.edition || !data.isbn || !data.condition || !data.price || !data.location || !data.description) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        setData(data)
        const dataWithCategory = {...data, category: 'Books'} 
        console.log(dataWithCategory)
        const queryParams = new URLSearchParams(dataWithCategory).toString();

        window.location.href = `./address?${queryParams}`

    }

    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR BOOK</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>
                        {/* Book Name */}
                        Book Title:
                        <input type="text" {...register("name", { required: true })} />
                        {errors?.name && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Author(s):
                        <input type="text" {...register("title", { required: true })} />
                        {errors?.title && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Publisher:
                        <input type="text" {...register("publisher", { required: true })} />
                        {errors?.publisher && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Edition:
                        <input type="text" {...register("edition", { required: true })} />
                        {errors?.edition && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        ISBN (if available):
                        <input type="text" {...register("isbn", { required: true })} />
                        {errors?.isbn && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Condition:
                        <select {...register("condition", { required: true })} >
                            <option value="like_new">Like New</option>
                            <option value="good">Good</option>
                            <option value="acceptable">Acceptable</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Price:
                        <input type="number" {...register("price", { required: true })} />
                        {errors?.price && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Location:
                        <input type="text" {...register("location", { required: true })} />
                        {errors?.location && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea name="book_description" {...register("description", { required: true })} ></textarea>
                        {errors?.description && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <button className='btn' type="submit">Step2 : Add Address</button>
                </form>
            </div>
        </div>

    )
}

export default Books