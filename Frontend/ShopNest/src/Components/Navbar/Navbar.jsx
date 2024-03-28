import { useEffect, useState } from 'react';
import './Navbar.css'
import logo from './svg/logo.png'
import Cookies from 'js-cookie'
import axios from 'axios'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function Navbar() {

  const { t } = useTranslation();
  const { home, wishlist, contact, register } = t("Navbar");

  const [isSticky, setIsSticky] = useState(false)

  const handleLogout = () => {
    Cookies.remove('access_token')
    window.location.reload()
  }

  useEffect(() => {

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [])

  const userId = localStorage.getItem('userId')

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
            <Link to={`/wishlist/${userId}`} >{wishlist}</Link>
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
  )
}

export default Navbar

