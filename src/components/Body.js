import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData=async ()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const responseData=await data.json();
    const finalResponse=responseData?.data?.cards?.[5].card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("finalResponse::",finalResponse);
    setRestaurantList(finalResponse);
  }

const isButtonClicked=false;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResList = restaurantList.filter((res) => {
              return res.info.avgRating > 4;
            });
            setRestaurantList(filteredResList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObject={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
