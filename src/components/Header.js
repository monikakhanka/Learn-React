import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


export const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);
    console.log(data);
   
    return (
        <div className="flex justify-between bg-red-100 shadow-xl m-2">
            <div className="w-40 h-30">
                <Link to="/"><img src={LOGO_URL} alt="logo" /></Link>
            </div>  
            <div className="flex items-center">
                <ul className="flex px-10">
                    <li className="px-4 py-6">Online status: {onlineStatus ? <>&#x2713;</>: <>&times;</>}</li>
                    <li className="px-4 py-6"><Link to="/">Home</Link></li>
                    <li className="px-4 py-6"><Link to="/about">About Us</Link></li>
                    <li className="px-4 py-6"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4 py-6"><Link to="/grocery">Grocery</Link></li>
                    
                    <button className="px-4 py-6" onClick={() => {
                        btnName === "Login" ? setBtnName("logout"): setBtnName("Login");
                        }
                    }>{btnName}</button>
                    <li className="px-4 py-6 font-bold"><Link to="/cart">{data.loggedInUser}</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;