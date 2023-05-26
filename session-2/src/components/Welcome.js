import React from "react";

class Welcome extends React.Component {
  state = {
    firstName: "ahmed",
    lastName: "yasser",
  };

  render() {
    return (
      <>
        <h1>hello from class {this.props.name} </h1>
        <h2>
          create by {this.state.firstName} {this.state.lastName}
        </h2>
      </>
    );
  }
}
export default Welcome;
