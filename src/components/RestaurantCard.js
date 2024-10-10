import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const  {resData} = props;
    const {loggedInUser}= useContext(UserContext);
 
    const {name, cuisines, avgRating, sla} = resData?.info ;
     return (
         <div className="m-4 p-4 w-[250px] h-[410px] bg-slate-100 hover:bg-slate-300 rounded-md">
             <img className="res-img h-52 w-56 rounded-md" src={CDN_URL+ resData.info.cloudinaryImageId } alt="" />
             <h3 className="font-bold py-1 text-lg">{name}</h3>
             <h4 className="">{cuisines.join(",")}</h4>
             <h4>{avgRating} stars</h4>
             <h4>{sla.deliveryTime} minutes</h4>
             <h3>{loggedInUser}</h3>
         </div>
     );
 }


 export default RestaurantCard;