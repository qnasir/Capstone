import React from 'react'
import axios from 'axios'
import './Electrical.css'
import { useForm } from 'react-hook-form';

function Electrical() {

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data)
        try {
            const response = await axios.post(`https://capstone-tn3i.onrender.com/product-route/post`, data)
            alert("Product Added Successfully")
            console.log("Product added successfully", response.data)
            reset()
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <div className='main'>
                <div className="add-product-container">
                    <h2>ELECTRICAL APPLIANCE</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <label>
                            Product Name:
                            <input type="text" {...register("name", {required: true})} />
                            {errors?.name && <span className="error">This field is required</span>}
                        </label>
                        <br />
                        <label>
                            Title:
                            <input type="text" {...register("title", {required: true})} />
                            {errors?.title && <span className="error">This field is required</span>}
                        </label>
                        <br />
                        <label>
                            Brand/Model:
                            <input type="text" {...register("brand", {required: true})} />
                            {errors?.brand && <span className="error">This field is required</span>}
                        </label>
                        <br />
                        <label>
                            Warranty:
                            <input type="text" {...register("warranty", {required: true})} />
                            {errors?.warranty && <span className="error">This field is required</span>}
                        </label>
                        <br />
                        <label>
                            Price:
                            <input type="number" {...register("price", {required: true})} />
                            {errors?.price && <span className="error">This field is required</span>}
                        </label>
                        <br />
                        <label>
                            Image:
                            <input type="text" {...register("image", {required: true})} />
                            {errors?.image && <span className="error">This field is required</span>}
                        </label>
                        <br />
                        <label>
                            Location:
                            <input type="text" {...register("location", {required: true})} />
                            {errors?.location && <span className="error">This field is required</span>}
                        </label>
                        <br />
                        <label>
                            Description:
                            <textarea {...register("description", {required: true})} ></textarea>
                            {errors?.description && <span className="error">This field is required</span>}
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
