import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Images.css';
import axios from 'axios';

const Images = () => {
    const [images, setImages] = useState([]);
    const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
    const [fetchedData, setFetchedData] = useState(null);
    const [isPosting, setIsPosting] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {

            const queryParams = new URLSearchParams(window.location.search);
            const data = {};
            for (let [key, value] of queryParams.entries()) {
                data[key] = value;
            }

            // console.log(data)
            // console.log(images)
            setFetchedData(data)

        };

        if (images.length > 0) {
            fetchData();
        }
    }, [images]);

    // useEffect(() => {
    //     console.log(fetchedData);
    // }, [fetchedData]);

    const submitProduct = async () => {

        if (images.length === 0) {
            alert("Please upload at least one image");
            return; 
        }

        setIsPosting(true);

        const uploadUrls = [];
        for (const image of images) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'Shop_Nest');

            try {
                const response = await axios.post('https://api.cloudinary.com/v1_1/dblgnnd2d/image/upload', formData)
                // console.log("Cloudify url", response.data.secure_url)
                // alert('Images uploaded successfully!');
                uploadUrls.push(response.data.secure_url)
            } catch (err) {
                console.error("Error in submitProduct", err)
            }

        }
        setUploadedImageUrls(uploadUrls)
        // console.log(uploadedImageUrls)

        const updatedData = {
            ...fetchedData,
            images: uploadUrls
        };
        // console.log(fetchedData)

            try {
                await axios.post(`https://capstone-tn3i.onrender.com/product-route/post`, updatedData)
                alert("Product Added Successfully")
                setIsPosting(false)
                window.history.go(-2)
            } catch(err) {
                console.error(err)
            }
        
    }

    const onDrop = (acceptedFiles) => {
        setImages([...images, ...acceptedFiles]);
    };

    const removeImage = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: 'image/*',
        onDrop,
    });

    return (
        <div className="image-uploader">
            <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                <p>Drag & drop some files here, or click to select files</p>
            </div>
            <div className="image-preview">
                {images.map((file, index) => (
                    <div key={index} className="image-preview-item">
                        <img src={URL.createObjectURL(file)} alt={`Image ${index}`} />
                        <button className="delete-button" onClick={() => removeImage(index)}>
                            &#10006;
                        </button>
                    </div>
                ))}
            </div>
            {isPosting ? (
                <button className='uploadButton'> 🔃 Posting data, please wait...</button>
            ) : (
                <button onClick={submitProduct} className='uploadButton'>Upload Images</button>
            )}
        </div>
    );
};

export default Images;
