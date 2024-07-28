import { useEffect, useState } from "react";
import UserClass from "./UserClass";

const User = (/* name */) => {
  useEffect(() => {
    // getuserInfo();
    const timer = setInterval(() => {
      console.log("Namste react op");
    }, 1000);
    console.log("useeffect called");

    return () => {
      clearInterval(timer);
      console.log("useeffect Return");
    };
  }, []);
  const [name, setname] = useState("dummy");

  // async function getuserInfo() {
  //   const data = await fetch("https://api.github.com/users/Vishalsingh369");
  //   const json = await data.json();
  //   setname(json.name);
  //   // console.log(json);
  // }
  console.log("render");
  // destructuring on the
  // let [count, setcount] = useState(0);
  //   const [count2] = useState(0);
  return (
    <div className="User">
      <h1>{name}</h1>
      {/* <UserClass/> */}
      {/* <h2>
        <button
          className="btn"
          onClick={() => {
            setcount(count + 1);
          }}
        >
          Count Increase
        </button>
        :{count}
      </h2> */}
      {/* <h2>
        <button
          className="btn"
          onClick={() => {
            setcount(count - 1);
          }}
        >
          Count Decrease
        </button>
      </h2> */}
      {/* <h2>This is User component</h2> */}
    </div>
  );
};

export default User;
