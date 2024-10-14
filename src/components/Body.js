import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";



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

        const {loggedInUser,setUserName} =useContext(UserContext);

        return listOfRestaurants.length === 0 ? 
        (<Shimmer />)
        : (
            <div className="body">
                <div className="filter flex">
                    <div className="search m-4 p-4">
                        <input type="text" className="border border-solid border-black mx-4" value={searchText} data-testid="searchInput" onChange={(e) => {setSearchText(e.target.value)}}/>
                        <button className="bg-blue-200 px-4 py-2 rounded-md" onClick={() => {
                            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredRestaurant);
                        }}>Search</button>
                    </div>
                    <div className="search m-4 flex items-center">
                            <button className="px-5 py-2 bg-blue-200 rounded-md" onClick={() =>{
                            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
                            setFilteredRestaurants(filteredList); 
                        }}>Top Rated Restaurants</button>
                       
                    </div>
                    <div className="flex items-center">
                        <label className="ml-7">Username</label>
                        <input className="border px-3 border-black rounded-md"value={loggedInUser} onChange={(e)=> setUserName(e.target.value) }/>
                          
                    </div>

                </div>

                <div className="res-container flex flex-wrap justify-evenly">
                    { 
                    filteredRestaurants.map((restaurant) => <Link className="res-menu" to={"/restaurants/"+restaurant.info.id} key= {restaurant.info.id}><RestaurantCard resData= {restaurant?.info}/></Link>)
                    }   
                </div>
            </div>
        );
    
    }

    export default Body;