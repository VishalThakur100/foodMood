import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants"; //  named import is done like this
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import img from "../utils/foodmood-high-resolution-logo-transparent.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faRightToBracket,
  faHouse,
  faUsers,
  faEnvelope,
  faUser,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [btnName, setbtnName] = useState("Login");

  // if no dependency array => useffect called on every render
  // if dependency array is empty => useEffect called on initial render
  // if dependency array is [btnName] => called everyTime btnName is updated

  // Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items.length);

  useEffect(() => {
    // console.log("useEffect called");
  }, []);
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-400 shadow-lg sm:bg-green-50 lg:bg-yellow-50 h-36">
      <div className="mb-20">
        <Link to="/">
          {" "}
          <img src={img} className="w-40 p-8" />
        </Link>

        {/* <img src={LOGO_URL} className="w-56" /> */}
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-8">
          <li className="px-4 text-nowrap font-medium text-[18px]">
            Online Status : {onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-medium text-[18px] text-nowrap">
            <Link to="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
          </li>
          <li className="px-4 text-center text-nowrap font-medium text-[18px]">
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} /> Contact Us
            </Link>
          </li>
          <li className="px-4 font-medium text-center text-nowrap text-[18px]">
            <Link to="/about">
            <FontAwesomeIcon icon={faUsers} />{" "} About Us
            </Link>
          </li>
          <li className="px-4 font-medium text-nowrap text-[18px]">
            <Link to="/grocery">
              <FontAwesomeIcon icon={faBasketShopping} /> Grocery
            </Link>
          </li>
          <li className="px-4 font-bold text-[18px] text-nowrap">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} /> Cart ({cartItems} Items)
            </Link>
          </li>
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="items-center mt-2 cursor-pointer"
          />
          <button
            className="px-[9px] font-bold text-[18px] "
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {" "}
            {btnName}
           
          </button>
          <FontAwesomeIcon icon={faUser} className="my-[6px]"/>{" "}
          <li className="px-2 font-extrabold text-nowrap text-[18px]">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
