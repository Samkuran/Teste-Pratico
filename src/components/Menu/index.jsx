import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Hidden, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/img/logo.png";
import "./styles.css";

export default function NavbarMenu() {
    const location = useLocation();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const isActive = (url) => {
      return location.pathname === url ? "active" : "";
    };
  
    const linkStyle = {
      textDecoration: "none",
      color: "inherit",
    };
  
    return (
      <nav id="nav">
        <Link style={linkStyle} underline="none" to="/" id="logo">
          <img id="vetor" src={logo} alt="logo" />
          <h1 style={linkStyle}>SouCar</h1>
        </Link>
        <div id="menu">
          <Hidden smUp>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
  
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose} component={Link} to={"/"}>
                Ofertas
              </MenuItem>
              <MenuItem
                onClick={handleClose}
                component={Link}
                to={"/administrativo"}
              >
                Administrativo
              </MenuItem>
            </Menu>
          </Hidden>
          <Hidden smDown>
          <Link
            style={linkStyle}
            underline="none"
            to="/"
            className={isActive("/")}
          >
            Ofertas
          </Link>
          <Link
            style={linkStyle}
            underline="none"
            to="/administrativo"
            className={isActive("/administrativo")}
          >
            Administrativo
          </Link>
        </Hidden>
      </div>
    </nav>
  );
}