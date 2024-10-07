import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



    const Body = () => {
        const [listOfRestaurants, setListOfRestaurants] = useState([]);
        const [filteredRestaurants, setFilteredRestaurants] = useState([]);
        const [searchText, setSearchText] = useState("");

        useEffect(()=>{
            fetchData();
        }, []);

        const fetchData = async () => {
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5946784&lng=73.7095365&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setListOfRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            
        }
    
        const onlineStatus = useOnlineStatus();

        if(onlineStatus === false) return <h3>Looks like you're offline!! Please check your internet connection</h3>
        
        // if true will continue 

        return listOfRestaurants.length === 0 ? 
        (<Shimmer />)
        : (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
                        <button onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredRestaurant);
                        }}>Search</button>
                    </div>

                    <button className="filter-btn" onClick={() =>{
                        const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4);
                        setListOfRestaurants(filteredList); 
                    }}>Top Rated Restaurants</button>
                </div>

                <div className="res-container">
                    { 
                    filteredRestaurants.map((restaurant) => <Link className="res-menu" to={"/restaurants/"+restaurant.info.id} key= {restaurant.info.id}><RestaurantCard resData= {restaurant}/></Link>)
                    }   
                </div>
            </div>
        );
    
    }

    export default Body;