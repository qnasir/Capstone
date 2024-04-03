import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import './Electrical.css'

function Laptop() {

    const [data, setData] = useState()

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        if (!data.name || !data.title || !data.processor  || !data.condition || !data.price || !data.location || !data.description) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        setData(data)
        const dataWithCategory = {...data, category: 'Laptops'} 
        console.log(dataWithCategory)
        const queryParams = new URLSearchParams(dataWithCategory).toString();

        window.location.href = `./upload-images?${queryParams}`

    }

    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>SELL YOUR LAPTOP</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>
                        Laptop Company:
                        <input type="text" {...register("name", { required: true })} />
                        {errors?.name && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        {/* Product Name */}
                        Brand/Model:
                        <input type="text" {...register("title", { required: true })} />
                        {errors?.title && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Processor:
                        <input type="text" {...register("processor", { required: true })} />
                        {errors?.processor && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        RAM:
                        <input type="text" {...register("ram", { required: true })} />
                        {errors?.ram && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Storage:
                        <input type="text" {...register("storage", { required: true })} />
                        {errors?.storage && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Screen Size:
                        <input type="text" {...register("screenSize", { required: true })} />
                        {errors?.screenSize && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Operating System:
                        <input type="text" {...register("os", { required: true })} />
                        {errors?.os && <span className="error">This field is required</span>}
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
                        <textarea {...register("description", { required: true })} ></textarea>
                        {errors?.description && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Listing</button>
                </form>
            </div>
        </div>

    )
}

export default Laptop