import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import './ProductPage.css'
import SearchBar from '../Product/SearchBar/SearchBar'
import Map from '../Map_ProductPage/Map'
import { AppContext } from '../../Context/ParentContext'
import { useParams } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react'

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

import { Send } from "lucide-react"

//Social Media Icons
import {
    FacebookIcon,
    TelegramIcon,
    WhatsappIcon,
    PinterestIcon,
    XIcon,
} from "react-share";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



function ProductPage() {

    const { productId } = useParams();
    const { user } = useClerk();

    const { latitude, setLatitude } = useContext(AppContext)
    const { longitude, setLongitude } = useContext(AppContext)
    const [isActive, setIsActive] = useState(true)
    const [isPopoverOpen, setIsPopoverOpen] = useState(true)
    const [offeredPrice, setOfferedPrice] = useState(null)
    const [isRequested, setIsRequested] = useState(false)
    const [product, setProduct] = useState({
        name: "",
        title: "",
        location: "",
        price: "",
        _id: "",
        offers: [],
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
    const [owner, setOwner] = useState({
        email: "",
        phone: "",
        username: "",
        userImage: "",
    });

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_PRODUCT_ID_KEY}/${productId}`)
                const { images, name, location, title, date, userId, description, price, _id, offers } = response.data
                setProduct({ images, name, location, title, date, userId, description, price, _id, offers })
                setLatitude(response.data.latitude)
                setLongitude(response.data.longitude)

                const userResponse = await axios.get(`${import.meta.env.VITE_USER_ID_KEY}/${userId}`)
                const { email, phone, username, userImage } = userResponse.data[0];
                setOwner({ email, phone, username, userImage })
            } catch (error) {
                console.error(error)
            }
        }
        fetchProduct();
    }, [productId])

    useState(() => {
    }, [offeredPrice])

    useEffect(() => {
        if (user) {
            const likedProducts = async () => {
                const userId = user.id
                try {
                    product.offers.map((item) => {
                        if (item.buyerId === userId) {
                            console.log("True")
                            setOfferedPrice(item.offer)
                            setIsRequested(true)
                        }
                    })

                    const response = await axios.get(`${import.meta.env.VITE_WISHLIST_ID_KEY}/${userId}`)
                    const data = response.data
                    data.map((product) => {
                        if (product._id === productId) {
                            setIsActive(false)
                        }
                    })

                } catch (err) {
                    console.log("Error fetching liked products", err)
                }
            }
            likedProducts()
        }
    }, [product.offers, user])


    const shareURL = `https://shop-nest-seven.vercel.app/product-page/${productId}`
    const [isToggle, setIsToggle] = useState(false);

    const ToggleShare = () => {
        setIsToggle(!isToggle);
    };

    const handleWishlist = async (productId, action) => {
        if (user) {
            if (action === "Add") {
                setIsActive(false)
                const userId = user.id
                const data = { userId, productId }
                try {
                    const response = await axios.post(import.meta.env.VITE_LIKED_PRODUCT_KEY, data);
                    localStorage.setItem('likedProducts', JSON.stringify(productId));
                    console.log(response.data)
                } catch (err) {
                    console.log("Current Error")
                }
            } else if (action === "Remove") {
                setIsActive(true)
                const userId = user.id
                try {
                    const response = await axios.delete(`${import.meta.env.VITE_REMOVE_LIKED_PRODUCT_KEY}/${userId}/${productId}`);
                    console.log(response.data)
                } catch (err) {
                    console.log("Current Error")
                }
            }
        }
    }

    const handleBuy = async (event, offerAmount) => {
        event.preventDefault()
        setIsPopoverOpen(false)
        const buyerId = user.id
        const offer = offerAmount.value
        const status = "pending"

        if (user) {
            const data = { productId, buyerId, offer, status }
            try {
                const response = await axios.post(import.meta.env.VITE_BUY_PRODUCT_KEY, data)
                setIsRequested(true)
                window.location.reload()
            } catch (err) {
                console.log("Buy Error", err)
            }
        }
    }

    const removeOffer = async () => {
        const buyerId = user.id
        if (user) {
            try {
                const response = await axios.delete(`${import.meta.env.VITE_REMOVE_OFFER_PRODUCT_KEY}/${productId}/${buyerId}`)
                console.log(response.data)
                setIsRequested(false)
            } catch(err) {
                console.log("Remove Offer Error", err)
            }
            console.log(buyerId)
        }
    }

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
                            {isRequested ? (<span className='request'><small>Offerd Price :- {offeredPrice}</small></span>) : ('')}
                        <div className="footer">
                            <div className="buttons">
                                <Popover>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            {isRequested ? (<button onClick={removeOffer} className="buy" variant="outline">Remove Offer</button>) : (<button onClick={() => setIsPopoverOpen(true)} className="buy" variant="outline">BUY NOW</button>)}
                                        </PopoverTrigger>
                                        {isPopoverOpen && (
                                            <PopoverContent className="w-100 bg-white p-4 rounded-md">

                                                <form onSubmit={(event) => handleBuy(event, offerAmount)}>
                                                    <div className="space-y-5">
                                                        <h4 className="font-medium leading-none">Make an Offer</h4>
                                                        <p className="text-sm text-muted-foreground">
                                                            Enter your offer below:
                                                        </p>
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <div className="grid pt-1 grid-cols-3 items-center gap-4">
                                                            <label htmlFor="offerAmount" className="col-span-1">Offer Amount</label>
                                                            <input
                                                                type="number"
                                                                id="offerAmount"
                                                                required
                                                                placeholder="Enter offer amount"
                                                                className="col-span-2 h-8 border rounded-md px-2"
                                                            />
                                                        </div>
                                                    </div>
                                                    <Button type="submit" size="sm" className="h-8 mt-4 w-full gap-1">
                                                        <Send className="h-3.5 w-3.5" />
                                                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                                            Sumbit Offer
                                                        </span>
                                                    </Button>
                                                </form>

                                            </PopoverContent>
                                        )}
                                    </Popover>

                                </Popover>

                                {isActive ? (
                                    <button onClick={() => handleWishlist(product._id, "Add")} className='wishlist'>ADD TO WISHLIST</button>
                                ) : (
                                    <button onClick={() => handleWishlist(product._id, "Remove")} className='wishlist'>REMOVE FROM WISHLIST</button>
                                )}

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
                            <img src={owner.userImage} alt="" />
                        </div>
                        <p className='seller'>{owner.username}</p>
                        <p className='verification'>VERIFIED</p>
                    </div>
                    <div className="map"><Map /></div>
                </div>

            </div>
        </>
    )
}

export default ProductPage


