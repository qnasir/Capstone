import './Product.css'
import { BsSearch } from "react-icons/bs";
import { CiFilter } from "react-icons/ci";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { GrLanguage } from "react-icons/gr";
import image from './svg/download.jpeg'


function Product() {
    return (
        <div className='main_container'>
            <div className="search_container">
                <div className="search_bar">
                    <input className="search" placeholder="Search..." type="text" />
                    <BsSearch className="search_light_icon" />
                </div>

                <div className="filter">
                    <CiFilter className='filter_icon' />
                </div>

                <div className='language_filter'>
                    <GrLanguage />
                </div>

                <div className="wrap">
                    <button className="button">Sell</button>
                </div>
            </div>

            <div className='product_container'>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

                <div className="single_product">
                    <div className="productImg">
                        <img src={image} alt="" />
                    </div>

                    <div className="productInfo">

                        <div className="title">
                            <p className='productName'>Product Name</p>
                            <p className='productTitle'>Product Title</p>
                        </div>

                        <div className="price_div">
                            <span>
                                <SlLocationPin className='location_icon' />
                                <p className='location'>Location</p>
                            </span>
                            <span className='price'>
                                <FaIndianRupeeSign />
                                <span className='price_text'>999</span>
                            </span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Product