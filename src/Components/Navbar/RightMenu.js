import React from "react";
import { Menu, Grid } from "antd";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const RightMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>

      <Menu.Item key="sign-in">
        <Link to="/sign-in">Sign In</Link>
      </Menu.Item>

      <Menu.Item key="sign-up">
        <Link to="/sign-up">Sign Up</Link>
      </Menu.Item>

      <Menu.Item key="services">
        <Link to="/services">Services</Link>
      </Menu.Item>

      <Menu.Item key="search">
        <Link to="/search">Search</Link>
      </Menu.Item>

      <Menu.Item key="profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
    </Menu>
  );
};

export default RightMenu;
