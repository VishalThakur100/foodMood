import { Component, useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import ResList from "../utils/mockData";
import UserContext from "../utils/UserContext";

const ResCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  // console.log(props);
  const { resData } = props; // destructuring on the fly
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;
  return (
    <div
      className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300"
      // style={{
      //   backgroundColor: "#f0f0f0",
      // }}
    >
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.deliveryTime} minutes</h4>
      {/* <h4>{loggedInUser}</h4> */}
    </div>
  );
};

// Higher Order Component

export const WithPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <ResCard {...props} />
      </div>
    );
  };
};
export default ResCard;
