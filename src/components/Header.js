import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
   
    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status: {onlineStatus ? <>&#x2713;</>: <>&times;</>}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
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