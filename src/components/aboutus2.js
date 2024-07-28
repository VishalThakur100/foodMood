import User from "./User";
import UserClass from "./UserClass";
// import React from "react";
// or
import { Component } from "react";

class About extends Component {
  // important note:  flow of the Components { constructor -> render -> componentDidMount}

  constructor(params) {
    super(params);

    // console.log("Parent constructor called");
  }
  // componentDidMount() {
  //   this.timer=setInterval(() =>{
  //         console.log("Namste Dev");
  //   },1000);
  // }
  // componentWillUnmount(){
  //   clearInterval(this.timer);
  //   console.log("component will unmount called");
  // }
  render() {
    // console.log("Parent render called");
    return (
      <div>
        <h1 className="bg-red-600 rounded-lg">About Class component</h1>
        <h2>Namaste React</h2>
        <UserClass/>
        <User/>
        {/* <UserClass
          name={"Vishal Thakur (class)"}
          Location={"Uttarakhand Class"}
        />
        <UserClass name={"Elon Musk (class)"} Location={"US Class"} /> */}
      </div>
    );
  }
}

/*

        parent constructor
        parent render
              first child constructor
              first child render

              second child constructor
              second child render

              third child constructor
              third child render

         note :- componentdidmount is batched together
          
           =>  <DOM updated - In single batch>

            first child componentdidmount
            second child componentdidmount
            third child componentdidmount

        parent componentdidmount

*/



/*

    1. Mounting cycle
          -> constructor called
          -> render called
                -> html with dummy data
          -> componentDidMount called
                -> api call
                this.setstate -> state varibale changed
  

    2. Updating cycle
          -> render api call
          ->html with new api data
          -> componentDidUpdate called
    3. Unmounting cycle
        -> when component changes [another component render]  ( componentWillUnmount called)




*/

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>Namaste React</h2>

//       <User name={"Vishal Thakur (function)"} location={"UK function"} />
//       <UserClass name={"Vishal Thakur (class)"} Location={"Uttarakhand Class"}/>
//     </div>
//   );
// };

export default About;
