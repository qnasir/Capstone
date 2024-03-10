import './Navbar.css'
import logo from './svg/logo.png'
import { useTranslation } from 'react-i18next'

function Navbar() {

  const {t} = useTranslation();
  const { home,wishlist,contact,register } = t("Navbar");

  return (
    <div className='navbar'>
      <div className="logo_container">
        <img className='logo' src={logo} alt="" />
      </div>

      <div className='text_container'>
        <div className='text'>{home}</div>
        <div className='text'>{wishlist}</div>
        <div className='text'>{contact}</div>

        <div className="button_div">
          <button className='button'>{register}</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar