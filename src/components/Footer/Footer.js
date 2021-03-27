import React from "react";
import "./Footer.scss";
import {
  HomeFilled,
  SearchOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <nav className="nav" id="mobileFooter">
      <a href="/#" className="nav__link">
        <HomeFilled style={{ fontSize: "20px" }} />
        <span className="nav__text">Home</span>
      </a>
      <a href="/#" className="nav__link nav__link--active">
        <SettingOutlined style={{ fontSize: "20px" }} />
        <span className="nav__text">Service</span>
      </a>
      <a href="/#" className="nav__link">
        <SearchOutlined style={{ fontSize: "20px" }} />
        <span className="nav__text">Search</span>
      </a>
      <a href="/#" className="nav__link">
        <UserOutlined style={{ fontSize: "20px" }} />
        <span className="nav__text">Profile</span>
      </a>
    </nav>
  );
};

export default Footer;
