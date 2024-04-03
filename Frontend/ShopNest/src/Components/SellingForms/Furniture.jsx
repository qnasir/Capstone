import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Electrical.css'

function Furniture() {

    const [data, setData] = useState()

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        if (!data.name || !data.title || !data.material || !data.color || !data.condition || !data.price || !data.location || !data.description) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        setData(data)
        const dataWithCategory = {...data, category: 'Furniture'} 
        console.log(dataWithCategory)
        const queryParams = new URLSearchParams(dataWithCategory).toString();

        window.location.href = `./upload-images?${queryParams}`

    }

    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR FURNITURE</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>
                        Furniture Type:
                        <input type="text" {...register("name", { required: true })} />
                        {errors?.name && <span className="error">This field is required</span>} 
                    </label>
                    <br />
                    <label>
                        Brand/Title:
                        <input type="text" {...register("title", { required: true })} />
                        {errors?.title && <span className="error">This field is required</span>} 
                    </label>
                    <br />
                    <label>
                        Material:
                        <input type="text" {...register("material", { required: true })} />
                        {errors?.material && <span className="error">This field is required</span>} 
                    </label>
                    <br />
                    <label>
                        Color:
                        <input type="text" {...register("color", { required: true })} />
                        {errors?.color && <span className="error">This field is required</span>} 
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
                        Location:
                        <input type="text" {...register("location", { required: true })} />
                        {errors?.location && <span className="error">This field is required</span>} 
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea name="furniture_description" {...register("description", { required: true })} ></textarea>
                        {errors?.description && <span className="error">This field is required</span>} 
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Furniture