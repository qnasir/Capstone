import React from 'react'
import './Selling_Categories.css'
import { Link } from 'react-router-dom'

function Sell_Categories() {
  return (
    <div className='selling_container'>
      <div className="buttons_container">

        <div className="Electrical">
          <Link to="/selling-page/electrical-appliance"><button>Electrical Appliances</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/clothes"><button>Clothes</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/stationary"><button>Stationary</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/furniture"><button>Furniture</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/sports"><button>Sports Equipments</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/books"><button>Books</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/jobs"><button>Part Time Job</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/mobiles"><button>Mobile Phones</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/laptop"><button>Laptops</button></Link>
        </div>

        <div className="Electrical">
          <Link to="/selling-page/gadgets"><button>Gadgets</button></Link>
        </div>

      </div>
    </div>
  )
}

export default Sell_Categories

