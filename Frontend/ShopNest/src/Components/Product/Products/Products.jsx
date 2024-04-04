import React, { useEffect, useState } from 'react';
import './Products.css';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { SlLocationPin } from "react-icons/sl";
import { PiHeartStraightFill } from "react-icons/pi";
import { useClerk } from '@clerk/clerk-react';

function Products({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [auth, setAuth] = useState(0);
  const [userId, setUserId] = useState(null);
  const [likedProducts, setLikedProducts] = useState([]);
  
  const { name, title, location, price, image, _id } = product;
  const { user } = useClerk();

  useEffect(() => {
    const userAuth = Cookies.get('__client_uat');
    setAuth(userAuth);

    if (user && user.id) {
      setUserId(user.id);
    }

    const storedLikedProducts = JSON.parse(localStorage.getItem('likedProducts'));
    if (storedLikedProducts) {
      setLikedProducts(storedLikedProducts);
    }

    fetchProducts();

  }, [userId]);

  useEffect(() => {
    localStorage.setItem('likedProducts', JSON.stringify(likedProducts));
  }, [likedProducts]);

  useEffect(() => {
    // Update isLiked state for each product
    const updatedIsLiked = {};
    likedProducts.forEach(id => {
      updatedIsLiked[id] = true;
    });
    setIsLiked(updatedIsLiked);
  }, [likedProducts]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const ids = [];
        const response = await axios.get(`${import.meta.env.VITE_WISHLIST_ID_KEY}/${userId}`);
        response.data.forEach(obj => {
          ids.push(obj._id);
        });
        setLikedProducts(ids);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts()
  }, [])

  const AddToWishlist = async (productId) => {
    if (auth === '0') {
      alert("Login First");
    } else {
      try {
        if (!isLiked[productId]) {
          const data = { userId, productId };
          console.log(data)
          const response = await axios.post(import.meta.env.VITE_LIKED_PRODUCT_KEY, data);
          if (response.data.message) {
            alert("Product added to wishlist");
            setLikedProducts([...likedProducts, productId]);
            setIsLiked(prevState => ({
              ...prevState,
              [productId]: true
            }));
          }
        } else {
          const response = await axios.delete(`${import.meta.env.VITE_REMOVE_LIKED_PRODUCT_KEY}/${userId}/${productId}`);
          if (response.data.message) {
            alert('Removed successfully');
            setLikedProducts(likedProducts.filter(id => id !== productId));
            setIsLiked(prevState => ({
              ...prevState,
              [productId]: false
            }));
          }
        }
      } catch (err) {
        console.error(err);
      }
    }
  };
  


  return (
    <>
      <div className='product_container'>
        <Link to={`product-page/${_id}`}>
          <div className="single_product">
            <div className="productImg">
              <img src={image} alt="" />
               <Link to="/"> 
                <span className={likedProducts.includes(_id) ? 'heart active' : 'heart'}   onClick={() => AddToWishlist(_id)}>
                  <PiHeartStraightFill className='heart_icon' />
                </span>
               </Link> 
            </div>

            <div className="productInfo">
              <div className="title">
                <p className='productName'>{name}</p>
                <p className='productTitle'>{title}</p>
              </div>

              <div className="price_div">
                <span>
                  <SlLocationPin className='location_icon' />
                  <p className='location'>{location}</p>
                </span>
                <span className='price'>
                  <FaIndianRupeeSign />
                  <span className='price_text'>{price}</span>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Products;
