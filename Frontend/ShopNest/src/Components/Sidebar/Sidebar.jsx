import './Sidebar.css'

// React-icons
import { BsLamp } from "react-icons/bs";
import { TbTie } from "react-icons/tb";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { LiaBookSolid } from "react-icons/lia";
import { MdOutlineChair } from "react-icons/md";
import { HiOutlineTrophy } from "react-icons/hi2";
import { GiTiedScroll } from "react-icons/gi";
import { TbDeviceMobile } from "react-icons/tb";
import { FiMonitor } from "react-icons/fi";
import { TfiMouse } from "react-icons/tfi";


const Sidebar = () => {
  return (

    <div className="frame_div">

      <div className="rectangle_frame">
        <div className="box">
          <div>
            <BsLamp />
          </div>
          <div className="category">Electrical Appliances</div>
        </div>
        <div className="box">
          <div>
            <TbTie />
          </div>
          <div className="category">Clothes</div>
        </div>
        <div className="box">
          <div>
            <HiOutlinePaintBrush />
          </div>
          <div className="category">Stationary</div>
        </div>
        <div className="box">
          <div>
            <LiaBookSolid /> 
          </div>
          <div className="category">Books</div>
        </div>
        <div className="box">
          <div>
            <MdOutlineChair />
          </div>
          <div className="category">Furniture</div>
        </div>
        <div className="box">
          <div>
            <HiOutlineTrophy />
          </div>
          <div className="category">Sports Equipment</div>
        </div>
        <div className="box">
          <div>
            <GiTiedScroll />
          </div>
          <div className="category">Part Time Jobs</div>
        </div>
        <div className="box">
          <div>
            <TbDeviceMobile />
          </div>
          <div className="category">Mobile Phones</div>
        </div>
        <div className="box">
          <div>
            <FiMonitor />
          </div>
          <div className="category">Laptops</div>
        </div>
        <div className="box" style={ {borderBottom: 'none'} }>
          <div>
            <TfiMouse />
          </div>
          <div className="category">Gadgets</div>
        </div>
      </div>

    </div>

  );
};

export default Sidebar;