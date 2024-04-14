import React, { useState,useEffect, useContext } from 'react'
import axios from 'axios'
import './ProductPage.css'
import image from '../Product/svg/download.jpeg'
import SearchBar from '../Product/SearchBar/SearchBar'
import Map from '../Map_ProductPage/Map'
import { AppContext } from '../../Context/ParentContext'
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

    const { latitude, setLatitude } = useContext(AppContext)
    const { longitude, setLongitude } = useContext(AppContext)
    const [product, setProduct] = useState({
        name: "",
        title: "",
        location: "",
        price: "",
        description: "",
        image: [],
        images: "",
        userId: "",
        brand: "",
        warranty: "",
        condition: "",
        size: "",
        gender: "",
        color: "",
        material: "",
        isbn: "",
        edition: "",
        publisher: "",
        jobType: "",
        requirements: "",
        processor: "",
        ram: "",
        storage: "",
        screenSize: "",
        os: "",
    });
    const [user, setUser] = useState({
        email: "",
        phone: "",
        username: "",
        userImage: "",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const  response = await axios.get(`${import.meta.env.VITE_PRODUCT_ID_KEY}/${productId}`)
                const { images, name, location,  title, date, userId, description, price } = response.data
                setProduct({ images, name, location,  title, date, userId, description, price })
                setLatitude(response.data.latitude)
                setLongitude(response.data.longitude)

                const  userResponse = await axios.get(`${import.meta.env.VITE_USER_ID_KEY}/${userId}`)
                const { email, phone, username, userImage } = userResponse.data
                setUser({ email, phone, username, userImage })
            } catch (error) {
                console.error(error)
            }
        }
        fetchProduct();
    }, [productId])

    const shareURL = `https://shop-nest-seven.vercel.app/product-page/${productId}`
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
                        <img src={product.images[0]} alt="" />
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
                            <div >
                                <span className='date'>
                                    <p>Published on :- {product.date}</p>
                                </span>
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
                            <img src={user.userImage} alt="" />
                        </div>
                        <p className='seller'>{user.username}</p>
                        <p className='verification'>VERIFIED</p>
                    </div>
                    <div className="map"><Map /></div>
                </div>

            </div>
        </>
    )
}

export default ProductPage  


