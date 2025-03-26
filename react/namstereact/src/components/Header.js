import { useState,useEffect,useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { NavLink, Link } from "react-router";
import UserContext from '../utils/UserContext'


const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const {LoggedInUser} = useContext(UserContext)
  console.log(LoggedInUser)
  /** console.log("Header Render")
  if no dependency array => useEffect is called on every render
  if dependency aaray is empty = [] => useEffect is called on intial reder (just once)
  if dependency array is [btnName] => called everytime btnName is updated
  */
  useEffect(()=>{
    // console.log("useEffect Called")
  }, [btnName]);
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            style={{ width: "130px" }}
            src={LOGO_URL}
            alt="Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Contact Us
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Cart
              </NavLink>
              <button className="login-btn" onClick={() => btnName ==="Login" ? setBtnName("Logout"): setBtnName("Login")}>{btnName}</button>
              <NavLink to="#">{LoggedInUser}</NavLink>
            </ul>
        </div>
      </div>
    );
  };
  export default Header;