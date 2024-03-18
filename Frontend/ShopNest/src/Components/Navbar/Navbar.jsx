import { useEffect, useState } from 'react';
import './Navbar.css'
import logo from './svg/logo.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Navbar() {

  const { t } = useTranslation();
  const { home, wishlist, contact, register } = t("Navbar");

  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

  }, [])

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
            <Link to="/wishlist">{wishlist}</Link>
          </div>
          <div className='text'>
            <Link to="contact-us">{contact}</Link>
          </div>

          <div className="button_div">
            <Link to="/register"><button className='button'>{register}</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

