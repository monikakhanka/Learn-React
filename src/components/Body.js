    import RestaurantCard from "./RestaurantCard";
    import { useState, useEffect } from "react";
    import Shimmer from "./Shimmer";



    const Body = () => {
        const [listOfRestaurants, setListOfRestaurants] = useState([]);
        const [filteredRestaurants, setFilteredRestaurants] = useState([]);
        const [searchText, setSearchText] = useState("");

        useEffect(()=>{
            fetchData();
        }, []);

        const fetchData = async () => {
            try{
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
                const json = await data.json();
                const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setListOfRestaurants(restaurants);
                setFilteredRestaurants(restaurants);
            }catch(e){
                console.error("Error fetching data:", e);
                setListOfRestaurants([]);
            }
        }
    
        

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
                    filteredRestaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData= {restaurant}/>)
                    }   
                </div>
            </div>
        );
    
    }

    export default Body;