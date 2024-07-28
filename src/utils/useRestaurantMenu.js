import { useEffect, useState } from "react";
import { item_URL } from "../utils/constants";
import { item_URL_2 } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(item_URL + resId + item_URL_2);
    const json = await data.json();
    // console.log(json);
    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
