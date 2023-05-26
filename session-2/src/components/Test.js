import React from "react";
class Test extends React.Component {
  state = {
    fname: "aa",
    lname: "yy",
  };

  render() {
    return (
      <>
        <h1>{this.state.fname}</h1>
        <span> {this.state.lname}</span>
      </>
    );
  }
}

export default Test;
