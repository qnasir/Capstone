import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './Images.css';
import axios from 'axios';

const Images = () => {

    async function convertToBase64(images) {
        const base64Images = await Promise.all(images.map(async (image) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(image);
            return new Promise((resolve, reject) => {
                fileReader.onload = () => {
                    resolve(fileReader.result);
                };
                fileReader.onerror = (error) => {
                    reject(error);
                };
            });
        }));
        return base64Images;
    }

    const [images, setImages] = useState([]);

    // useEffect(() => {
        const createPost = async () => {

            if (images.length === 0) {
                alert("Please upload at least one image");
                return; 
            }

            const fetchData = async () => {
                const queryParams = new URLSearchParams(window.location.search);
                const data = {};
                for (let [key, value] of queryParams.entries()) {
                    data[key] = value;
                }
    
                const base64Images = await convertToBase64(images);
    
                data.image = base64Images;
    
                console.log(data);
    
                try {
                    await axios.post(`https://capstone-tn3i.onrender.com/product-route/post`, data)
                    alert("Product Added Successfully")
                    console.log("Product added successfully", response.data)
                } catch(err) {
                    console.error(err)
                }
    
            };
    
            fetchData();
        }
    // }, [images]);

    // console.log("images", images)

    // const createPost = async () => {
    //     try {
    //         await axios.post(`https://capstone-tn3i.onrender.com/product-route/post`, data)
    //         alert("Product Added Successfully")
    //         console.log("Product added successfully", response.data)
    //     } catch(err) {
    //         console.error(err)
    //     }
    // }

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

            <button onClick={createPost} className='uploadButton'>Upload Images</button>
            
        </div>
    );
};

export default Images;

