import { useEffect, useState } from 'react';
import './Navbar.css'
import logo from './svg/logo.png'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useClerk } from '@clerk/clerk-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { t } = useTranslation();
  const { home, wishlist, contact, register } = t("Navbar");
  const { user } = useClerk(); // Get the user object directly
  
  const [isSticky, setIsSticky] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null); // Declare userId state
  const [auth, setAuth] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    // Check if the user is logged in
    const userAuth = Cookies.get('__client_uat');
    // console.log(auth)
    setAuth(userAuth)

    // Set userId if user is logged in
    if (user && user.id) {
      setUserId(user.id);
    }

    // const handleScroll = () => {
    //   setIsSticky(window.scrollY > 0);
    // };
  
    // window.addEventListener("scroll", handleScroll);
  
    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  },[]);

  useEffect(() => {
    const handleAuth = async () => {
      try {
        if (user) {
          const userId = user.id;
          const email = user.primaryEmailAddress.emailAddress;
          const phone = user.primaryPhoneNumber.phoneNumber;
          const userImage = user.imageUrl;
          const data = { userId, email, phone, userImage };
          
          const response = await axios.post(import.meta.env.VITE_SIGNUP_KEY, data);
          console.log(response);
          alert("User added successfully");
          window.location.reload()
          console.log(data);
        }
      } catch (err) {
        console.log("User already exists");
      }
    };
  
    handleAuth();
  })

  const handleWishlistClick = async () => {
    console.log(user);
    console.log(auth);

    if (auth === '0') {
        setIsLoggedIn(false);
        alert("Please login first");
    } else {
        setIsLoggedIn(true);
        console.log(user.id);
        if (user.id) {
            navigate(`/wishlist/${user.id}`);
        } else {
            console.log(user);
        }
    }
};

  return (
    <div className={`navbar ${isSticky ? 'sticky' : ""}`}>
      <div className='contents'>
        <div className="logo_container">
          <img className='logo' src={logo} alt="" />
        </div>

        <div className='text_container'>
          <div className='text'>
            <Link to="/">{home}</Link>
          </div>
          <div className='text'>
            <div onClick={handleWishlistClick}>{wishlist}</div>    
          </div>
          <div className='text'>
            <Link to="contact-us">{contact}</Link>
          </div>

          <div className="button_div">
            <header>
              <SignedOut>
                <SignInButton className='button' />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
