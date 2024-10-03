import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState } from "react";



const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(restList);

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() =>{
                    const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                    setListOfRestaurants(filteredList); 
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                { 
                  listOfRestaurants.map((restaurant) => <RestaurantCard key={restaurant.id} resData= {restaurant}/>)
                }   
            </div>
        </div>
    );
}

export default Body;