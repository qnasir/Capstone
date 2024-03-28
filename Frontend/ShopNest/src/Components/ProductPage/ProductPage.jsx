import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './ProductPage.css'
import image from '../Product/svg/download.jpeg'
import SearchBar from '../Product/SearchBar/SearchBar'
import Map from '../Map_ProductPage/Map'
import { useParams } from 'react-router-dom';

// React Icons
import { FaRupeeSign } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { ShareSocial } from 'react-ionicons';


// Social Media Buttons
import {
    FacebookShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    PinterestShareButton,
  
} from "react-share";


//Social Media Icons
import {
    FacebookIcon,
    TelegramIcon,
    WhatsappIcon,
    PinterestIcon,
    XIcon,
} from "react-share";


function ProductPage() {

    const { productId } = useParams();

    const [product, setProduct] = useState({
        name: "",
        title: "",
        location: "",
        price: "",
        description: "",
        image: "",
    })

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const  response = await axios.get(`${import.meta.env.VITE_PRODUCT_ID_KEY}/${productId}`)
                const { image, name, location,  title,  description, price } = response.data
                setProduct({ image, name, location,  title,  description, price })
                console.log(response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchProduct();
    }, [productId])

    const shareURL = 'Website URl'
    // const [product, setProduct] = useState(null);
    const [isToggle, setIsToggle] = useState(false);

    const ToggleShare = () => {
        setIsToggle(!isToggle);
    };

    return (
        <>
            <div className='parent_div'>
                <SearchBar style={{ "width": "500px" }} />
            </div>
            <div className='product_page_container'>

                <div className="product">
                    <div className="product_image">
                        <img src={product.image} alt="" />
                    </div>
                    <div className="product_info">
                        <div className="heading">

                            <div className='name'>
                                <p>{product.name}</p>
                            </div>

                            <div className="logo">
                                <div className={isToggle ? 'toggle active' : 'toggle'} onClick={ToggleShare}>
                                    <ShareSocial />
                                </div>

                                <ul className="share_buttons">
                                  
                                        <li style={{ '--i': '0', '--clr': '#25D366' }} className={isToggle ? 'active' : ''}>
                                                <WhatsappShareButton className='social_icon' url={shareURL}>
                                                    <WhatsappIcon size={30} round={true} />
                                                </WhatsappShareButton>
                                        </li>

                                        <li style={{ '--i': '1', '--clr': '#E60023' }} className={isToggle ? 'active' : ''}>
                                                <PinterestShareButton className='social_icon' url={shareURL}>
                                                    <PinterestIcon size={30} round={true} />
                                                </PinterestShareButton>
                                        </li>

                                        <li style={{ '--i': '2', '--clr': '#0965FE' }} className={isToggle ? 'active' : ''}>
                                                <FacebookShareButton className='social_icon' url={shareURL}>
                                                    <FacebookIcon size={30} round={true} />
                                                </FacebookShareButton>
                                        </li>

                                        <li style={{ '--i': '3', '--clr': '#000000' }} className={isToggle ? 'active' : ''}>
                                                <TwitterShareButton className='social_icon' url={shareURL}>
                                                    <XIcon size={30} round={true} />
                                                </TwitterShareButton>
                                        </li>

                                        <li style={{ '--i': '4', '--clr': '#25A3E3' }} className={isToggle ? 'active' : ''}>
                                                <TelegramShareButton className='social_icon' url={shareURL}>
                                                    <TelegramIcon size={30} round={true} />
                                                </TelegramShareButton>
                                        </li>

        
                                </ul>
                            </div>

                        </div>
                        <p className='title'>{product.title}</p>
                        <span className='price'>
                            <FaRupeeSign className='price_icon' />
                            <p>{product.price}</p>
                        </span>
                        <div className="discription">
                            <p>{product.description}</p>
                        </div>
                        <div className="footer">
                            <div className="buttons">
                                <button className='buy'>BUY NOW</button>
                                <button className='wishlist'>ADD TO WISHLIST</button>
                            </div>
                            <div>
                                <span className='location'>
                                    <SlLocationPin />
                                    <p>{product.location}</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="seller_info">
                    <div className="seller_detail">
                        <p className='post'>Posted By</p>
                        <div className="seller_image">
                            <img src={image} alt="" />
                        </div>
                        <p className='seller'>NASIR</p>
                        <p className='verification'>VERIFIED</p>
                    </div>
                    <div className="map"><Map /></div>
                </div>

            </div>
        </>
    )
}

export default ProductPage  


