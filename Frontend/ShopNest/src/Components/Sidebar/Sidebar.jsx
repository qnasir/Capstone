import './Sidebar.css'
import { useTranslation } from 'react-i18next';

// React-icons
import { TbCategoryPlus } from "react-icons/tb";
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

const Sidebar = (props) => {

  const {t} = useTranslation();
  const categories = Object.values(t("Sidebar"));
  let Icons = [TbCategoryPlus,BsLamp, TbTie, HiOutlinePaintBrush, LiaBookSolid, MdOutlineChair, HiOutlineTrophy, GiTiedScroll, TbDeviceMobile, FiMonitor, TfiMouse]
 
  return (

    <div className="frame_div">

      <div className="rectangle_frame">

        {categories && categories.length>0 && categories.map((item,index)=> {
          const IconComponenets = Icons[index];
          return (
            <div onClick={() => props.handleCategory && props.handleCategory(item)} key={index} className="box">
          <div>
            <IconComponenets />
          </div>
          <div className="category">{item}</div>
        </div>
          )
        })}

      </div>

    </div>

  );
};

export default Sidebar;