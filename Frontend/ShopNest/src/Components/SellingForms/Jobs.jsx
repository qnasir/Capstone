import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import './Electrical.css'

function Jobs() {

    const [data, setData] = useState()

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = async (data) => {
        if (!data.name || !data.title || !data.jobType || !data.price || !data.location || !data.description || !data.requirements) {
            alert("Please fill out all fields before submitting.");
            return;
        }

        setData(data)
        const dataWithCategory = {...data, category: 'Part Time Jobs'} 
        console.log(dataWithCategory)
        const queryParams = new URLSearchParams(dataWithCategory).toString();

        window.location.href = `./upload-images?${queryParams}`

    }

    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>POST A PART-TIME JOB</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <label>
                        Job Name:
                        <input type="text" {...register("name", { required: true })} />
                        {errors?.name && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Job Title:
                        <input type="text" {...register("title", { required: true })} />
                        {errors?.title && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Monthly Price:
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
                        Job Type:
                        <select {...register("jobType", { required: true })} >
                            <option value="temporary">Temporary</option>
                            <option value="seasonal">Seasonal</option>
                            <option value="contract">Contract</option>
                            <option value="freelance">Freelance</option>
                            <option value="other">Other</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Description:
                        <textarea name="job_description" {...register("description", { required: true })} ></textarea>
                        {errors?.description && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <label>
                        Requirements:
                        <textarea name="job_requirements" {...register("requirements", { required: true })} ></textarea>
                        {errors?.requirements && <span className="error">This field is required</span>}
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Job</button>
                </form>
            </div>
        </div>

    )
}

export default Jobs