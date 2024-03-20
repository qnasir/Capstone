import React from 'react'
import './Electrical.css'

function Jobs() {
    return (
        <div className='main'>
            <div className="add-product-container">
                <h2>POST A PART-TIME JOB</h2>
                <form>
                    <label>
                        Job Name:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Job Title:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Monthly Price:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Location:
                        <input type="text" />
                    </label>
                    <br />
                    <label>
                        Job Type:
                        <select>
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
                        <textarea name="job_description"></textarea>
                    </label>
                    <br />
                    <label>
                        Requirements:
                        <textarea name="job_requirements"></textarea>
                    </label>
                    <br />
                    <button className='btn' type="submit">Post Job</button>
                </form>
            </div>
        </div>

    )
}

export default Jobs