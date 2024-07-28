import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo:{
        name:"dummy",
        bio:"about",
        avatar_url:"http://",
        // location:"UK",
      }
      // count: 0,
      // count2: 2,
    };
    // console.log(" Child Constructor called"); //first constructor called
    // console.log(props);
  }

  // async componentDidMount() {
  //   // console.log(" Child componentDidMount called");
  //   const data= await fetch("https://api.github.com/users/Vishalsingh369");
  //   const json = await data.json();
  //   this.setState({
  //     userInfo:json,
  //   })
  //   // console.log(json);
  // }

  render() {
    const{name,bio,avatar_url}=this.state.userInfo
    // console.log(" Child Render called");
    // const { name, Location } = this.props;
    // let { count, count2 } = this.state;
    return (

      <div className="User">
        <h1>{name}</h1>
        <img src={avatar_url}></img>
        {/* <h1>
          <button
            className="btn"
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Count
          </button>
          :{count}
        </h1> */}
        {/* <h1>Count2:{count2}</h1> */}
        {/* <h2>This is User component</h2> */}
        <h3>{bio}</h3>
      </div>
    );
  }
}

export default UserClass;
