import React, { Component } from "react";
import RightMenu from "./RightMenu";
import { Drawer, Button } from "antd";
import "./navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <nav className="menuBar">
        <Link to="/">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <div className="menuCon">
          <div className="rightMenu">
            <RightMenu />
          </div>
          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={true}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <RightMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
