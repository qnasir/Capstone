import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Images.css';
import ClipLoader from 'react-spinners/ClipLoader'
import axios from 'axios';

const Images = () => {
    const [images, setImages] = useState([]);
    const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
    const [fetchedData, setFetchedData] = useState(null);
    const [isPosting, setIsPosting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const queryParams = new URLSearchParams(window.location.search);
            const data = {};
            for (let [key, value] of queryParams.entries()) {
                data[key] = value;
            }
            setFetchedData(data);
            console.log(data)
        };

        if (images.length > 0) {
            fetchData();
            console.log("Data", fetchedData)
        }
    }, [images]);

    const submitProduct = async () => {
        if (images.length === 0) {
            alert("Please upload at least one image");
            return;
        }

        setIsPosting(true);

        const uploadUrls = [];
        for (const [index, image] of images.entries()) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'Shop_Nest');

            try {
                const response = await axios.post(import.meta.env.VITE_CLOUDINARY_KEY, formData, {
                    onUploadProgress: progressEvent => {
                        const percentCompleted = Math.round((progressEvent.loaded * 50) / progressEvent.total); // Scale to 50%
                        let currentProgress = 0;
                        const increment = 1; 
                        const interval = setInterval(() => {
                            if (currentProgress <= percentCompleted) {
                                setProgress(prevProgress => {
                                    const newProgress = Math.min(prevProgress + increment, 50); 
                                    currentProgress += increment;
                                    return newProgress;
                                });
                            } else {
                                clearInterval(interval);
                            }
                        }, 50);
                    }
                });
                uploadUrls.push(response.data.secure_url);
            } catch (err) {
                console.log("Error in submitProduct", err);
            }
        }

        setUploadedImageUrls(uploadUrls);

        const updatedData = {
            ...fetchedData,
            images: uploadUrls
        };

        try {
            console.log(updatedData)
            await axios.post(import.meta.env.VITE_PRODUCT_POST_KEY, updatedData);
            updateProgress();
        } catch (err) {
            console.log(err);
        }
    };

    const updateProgress = () => {
        let currentProgress = 50;
        const increment = 1;
        const interval = setInterval(() => {
            if (currentProgress < 100) {
                setProgress(prevProgress => Math.min(prevProgress + increment, 100));
                currentProgress += increment;
            } else {
                clearInterval(interval);
                setIsPosting(false);
                setProgress(0);
                setSuccessMessage('Product Added Successfully');
            }
        }, 50);
    };

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
                <input accept='images/**' {...getInputProps()} />
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
                <div className='progress'>
                    <progress className='bar' value={progress} max={100} />
                    <button className='uploadButton' disabled><ClipLoader loading={isPosting} color={'red'} size={15} />Selling...</button>
                </div>
            ) : (
                <button onClick={submitProduct} className='uploadButton'>Sell</button>
            )}
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default Images;
