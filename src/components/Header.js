import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
   
    return (
        <div className="flex justify-between bg-red-100 shadow-xl m-2">
            <div className="w-40 h-30">
                <img src={LOGO_URL} alt="logo" />
            </div>  
            <div className="flex items-center">
                <ul className="flex px-10">
                    <li className="px-4 py-6">Online status: {onlineStatus ? <>&#x2713;</>: <>&times;</>}</li>
                    <li className="px-4 py-6"><Link to="/">Home</Link></li>
                    <li className="px-4 py-6"><Link to="/about">About Us</Link></li>
                    <li className="px-4 py-6"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 py-6"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 py-6"><Link to="/cart">Cart</Link></li>
                    <button className="px-4 py-6" onClick={() => {
                        btnName === "Login" ? setBtnName("logout"): setBtnName("Login");
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;