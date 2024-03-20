import React from 'react'
import './Selling_Categories.css'
import { Link } from 'react-router-dom'

function Sell_Categories() {
  return (
    <div className='selling_container'>
        <div className="buttons_container">

            <div className="Electrical">
                <Link to="/electrical-appliance"><button>Electrical Appliances</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/clothes"><button>Clothes</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/stationary"><button>Stationary</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/furniture"><button>Furniture</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/sports"><button>Sports Equipments</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/books"><button>Books</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/jobs"><button>Part Time Job</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/mobiles"><button>Mobile Phones</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/laptop"><button>Laptops</button></Link>
            </div>

            <div className="Electrical">
            <Link to="/gadgets"><button>Gadgets</button></Link>
            </div>

        </div>
    </div>
  )
}

export default Sell_Categories

