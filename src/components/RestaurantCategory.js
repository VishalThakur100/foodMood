import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex ,dummy}) => {
  // const [showItems, setshowItems] = useState(false);
  const handleClick = () => {
    setshowIndex();
  };
  // console.log(data);
  return (
    <div>
      {/* {accordian header} */}
      <div className="w-6/12  my-4 mx-auto  bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
      {/* {accordian body} */}
    </div>
  );
};

export default RestaurantCategory;
