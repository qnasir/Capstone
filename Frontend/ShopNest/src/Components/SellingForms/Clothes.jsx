import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import './Electrical.css'

function Clothes() {

    const [data, setData] = useState()

    const { register, handleSubmit, errors, reset } = useForm();

    const sizeOptions = ["Small", "Medium", "Large", "XL", "XXL", "XXXL"];
    const colorOptions = ["Black","White","Gray","Beige","Brown","Navy","Red","Blue","Yellow","Green","Orange","Purple","Light Pink","Light Blue","Mint Green","Lavender"];

    const onSubmit = async (data) => {
        if (!data.name || !data.color || !data.brand || !data.gender || !data.title || !data.condition || !data.price || !data.description) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        setData(data)
        const dataWithCategory = {...data, category: 'Clothes'} 
        console.log(dataWithCategory)
        const queryParams = new URLSearchParams(dataWithCategory).toString();

        window.location.href = `./address?${queryParams}`

    }

    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR CLOTHES</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>
                        Product Name:
                        <input type="text" {...register("name", { required: true })} />
                        {errors?.name && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Brand:
                        <input type="text" {...register("brand", { required: true })} />
                        {errors?.brand && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Size:
                        <select  {...register("title", { required: true })} >
                            {sizeOptions.map((size,index) => (
                            <option key={index} value={size}>{size}</option>
                            ))}
                        </select>
                    </label>
                    <br />
                    <label>
                        Gender:
                        <select {...register("gender", { required: true })} >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="unisex">Unisex</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Color:
                        <select  {...register("color", { required: true })} >
                            {colorOptions.map((color,index) => (
                            <option key={index} value={color}>{color}</option>
                            ))}
                        </select>
                    </label>
                    <br />
                    <label>
                        Condition:
                        <select  {...register("condition", { required: true })} >
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
                        Description:
                        <textarea name="clothes_description" {...register("description", { required: true })} ></textarea>
                        {errors?.description && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <button className='btn' type="submit">Step2 : Add Address</button>
                </form>
            </div>
        </div>

    )
}

export default Clothes