import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Electrical.css'

function Stationary() {

    const [data, setData] = useState()

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        if (!data.name || !data.title || !data.brand || !data.condition || !data.price || !data.description) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        setData(data)
        const dataWithCategory = { ...data, category: 'Stationary' }
        console.log(dataWithCategory)
        const queryParams = new URLSearchParams(dataWithCategory).toString();

        window.location.href = `./address?${queryParams}`

    }

    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR STATIONERY</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>
                        Item Type:
                        <input type="text" {...register("name", { required: true })} />
                        {errors?.name && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Title:
                        <input type="text" {...register("title", { required: true })} />
                        {errors?.title && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Brand (if applicable):
                        <input type="text" {...register("brand", { required: true })} />
                        {errors?.brand && <span className="error">This field is required</span>}
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
                        <input type="text" {...register("price", { required: true })} />
                        {errors?.price && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea name="stationery_description" {...register("description", { required: true })} ></textarea>
                        {errors?.description && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <button className='btn' type="submit">Step2 : Add Address</button>
                </form>
            </div>
        </div>

    )
}

export default Stationary