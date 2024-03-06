import './Navbar.css'
import logo from './svg/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo_container">
        <img className='logo' src={logo} alt="" />
      </div>

      <div className='text_container'>
        <div className='text'>HOME</div>
        <div className='text'>Wishlist</div>
        <div className='text'>Contact Us</div>

        <div className="button_div">
          <button className='button'>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar