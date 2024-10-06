import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
   
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login" onClick={() => {
                        btnName === "Login" ? setBtnName("logout"): setBtnName("Login");
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;