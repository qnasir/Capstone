import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Electrical.css'

function Gadgets() {

    const [data, setData] = useState()

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        if (!data.name || !data.title || !data.condition || !data.price || !data.description) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        setData(data)
        const dataWithCategory = {...data, category: 'Gadgets'} 
        console.log(dataWithCategory)
        const queryParams = new URLSearchParams(dataWithCategory).toString();

        window.location.href = `./address?${queryParams}`

    }

    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR GADGET</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>
                        Product Name:
                        <input type="text" {...register("name", { required: true })} />
                        {errors?.name && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Brand/Model:
                        <input type="text" {...register("title", { required: true })} />
                        {errors?.title && <span className="error">This field is required</span>}
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
                        Description:
                        <textarea {...register("description", { required: true })} ></textarea>
                        {errors?.description && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <button className='btn' type="submit">Step2 : Add Address</button>
                </form>
            </div>
        </div>

    )
}

export default Gadgets