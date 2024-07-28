import ResList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import ResCard, { WithPromotedLabel } from "./ResCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const ResCardWithPromoted = WithPromotedLabel(ResCard);

  // whenever the state variable update react trigger the reconciliation cycle(re-render the component)
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRestaurants(
      // Optional Chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //  console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer/>;
  // }

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return (
      <div>
        <h1>Looks like you are offline!!</h1>
        <h2>Please check your Internet Connection 😥</h2>
      </div>
    );

  const { loggedInUser, setuserName } = useContext(UserContext);
  

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="flex justify-center">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-1 font-bold m-4 bg-blue-600 rounded-lg"
            onClick={() => {
              // console.log(searchText);
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4 items-center flex">
          <button
            className="bg-pink-300 px-4 py-2 rounded-lg"
            onClick={() => {
              const filteredlist = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setListOfRestaurants(filteredlist);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="m-4 p-4 flex items-center">
          <label>Username : </label>
          <input
            className="border border-black m-2 p-2 border-solid"
            value={loggedInUser}
            onChange={(e) => 
              setuserName(e.target.value)
            }
          />
        </div>
      </div>
      <div className="flex flex-wrap rounded-lg">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <ResCardWithPromoted resData={restaurant} />
            ) : (
              <ResCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
