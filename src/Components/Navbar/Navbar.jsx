// ****************** Navbar_JSX *********************


// Import necessary modules and assets for the Navbar component.
// ----------------------------------------------------------------------------------------------------------------------------
    import React, { useContext, useRef, useState } from "react";
    import "./Navbar.css";
    import { useDispatch, useSelector } from "react-redux";
    import { logout } from "../../redux/actions/authActions"; 
    import logo from "../Assets/logo.png";
    import cart_icon from "../Assets/cart_icon.png";
    import nav_dropdown from "../Assets/nav_dropdown.png";
    import { Link } from "react-router-dom";
    import { ShopContext } from "../../Context/ShopContext";
// ----------------------------------------------------------------------------------------------------------------------------


// Define the Navbar component.
// ----------------------------------------------------------------------------------------------------------------------------
    const Navbar = () =>
    {
        // Use useState to manage the current menu selection state.
        const [menu,setMenu] = useState("shop"); // Use useContext to get the total number of items in the cart from ShopContext.
        const {getTotalCartItems}= useContext(ShopContext);
        const menuRef = useRef(); // Use useRef to create a reference for the dropdown menu.
        const currentUser = useSelector((state) => state.auth.username);
        const dispatch = useDispatch();


        // Function to toggle the dropdown menu visibility.
        const dropdown_toggle = (e) =>
        {
          menuRef.current.classList.toggle("nav-menu-visible");
          e.target.classList.toggle("open");
        }

        const handleLogout = () =>
        {
            dispatch(logout());
        };





        return (
            <div className="navbar">
                  <Link to="/" onClick={()=>{setMenu("shop")}} className="nav-logo">
                      <img src={logo} alt="" />
                      <p>SHOPPER</p>
                  </Link>
                  <img onClick={dropdown_toggle} className="nav-dropdown" src={nav_dropdown} alt="" />
                  <ul ref={menuRef} className="nav-menu">
                      <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                      <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                      <li onClick={()=>{setMenu("womens")}}><Link to="womens">Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                      <li onClick={()=>{setMenu("kids")}}><Link to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
                  </ul>
                  <div className="nav-login-cart">
                      {currentUser ? (
                        <div>
                        <p>Logged in as: {currentUser.username}</p>
                        <button onClick={handleLogout} className="logout-button">Logout</button>
                        </div>
                        ) : (
                        <Link to="/login"><button>Login</button></Link>
                      )}
                      <Link to="/cart"><img src={cart_icon} alt="" /></Link>
                  <div className="nav-cart-count">{getTotalCartItems()}</div>
              </div>
            </div>
        )
    };
// ----------------------------------------------------------------------------------------------------------------------------


export default Navbar; // Export necessary Modules.
