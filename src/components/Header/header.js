import React from "react";
import "./index.css";
import images from "../../images/ring.png";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="jewell-header-outer">
      <div className="jewell-header-icon">
        <div className="jewell-header-icon-font-header">
          <img src={images} alt={"header"} width={"50px"} />
        </div>
        <div>
          <div className="jewell-header-icon-font-header">Dikshi</div>
          <div className="jewell-header-icon-font">World Famous jewellery</div>
        </div>
      </div>
      <div className="jewell-header-icon-font-header-1">
        {/* <input  type='text' /> */}
        Welcome to our dikshi jewell purchase
      </div>
      <div className="jewell-header-outer-icon">
        <BiUser
          size={30}
          color="#fff"
          onClick={() => {
            navigate("/login");
          }}
        />

        <CiHeart size={30} color="#fff" />

        <IoCartOutline size={30} color="#fff" onClick={() => {
          navigate("/payment");
        }} />

        <FiMenu size={30} color="#fff" />
      </div>
    </div>
  );
};

export default Header;
