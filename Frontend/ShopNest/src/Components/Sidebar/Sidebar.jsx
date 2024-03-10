import './Sidebar.css'
import { useTranslation } from 'react-i18next';

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

  const {t} = useTranslation();
  const {electrical,clothes,stationery,books,furniture,sports,jobs,mobile,laptop,gadgets} = t("Sidebar")

  return (

    <div className="frame_div">

      <div className="rectangle_frame">
        <div className="box">
          <div>
            <BsLamp />
          </div>
          <div className="category">{electrical}</div>
        </div>
        <div className="box">
          <div>
            <TbTie />
          </div>
          <div className="category">{clothes}</div>
        </div>
        <div className="box">
          <div>
            <HiOutlinePaintBrush />
          </div>
          <div className="category">{stationery}</div>
        </div>
        <div className="box">
          <div>
            <LiaBookSolid /> 
          </div>
          <div className="category">{books}</div>
        </div>
        <div className="box">
          <div>
            <MdOutlineChair />
          </div>
          <div className="category">{furniture}</div>
        </div>
        <div className="box">
          <div>
            <HiOutlineTrophy />
          </div>
          <div className="category">{sports}</div>
        </div>
        <div className="box">
          <div>
            <GiTiedScroll />
          </div>
          <div className="category">{jobs}</div>
        </div>
        <div className="box">
          <div>
            <TbDeviceMobile />
          </div>
          <div className="category">{mobile}</div>
        </div>
        <div className="box">
          <div>
            <FiMonitor />
          </div>
          <div className="category">{laptop}</div>
        </div>
        <div className="box" style={ {borderBottom: 'none'} }>
          <div>
            <TfiMouse />
          </div>
          <div className="category">{gadgets}</div>
        </div>
      </div>

    </div>

  );
};

export default Sidebar;