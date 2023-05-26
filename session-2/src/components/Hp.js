import React from "react";

class Hp extends React.Component {
  state = {
    fname: "ahmed ",
  };
  render() {
    return (
      <>
        <h2>{this.state.fname} from hp</h2>
      </>
    );
  }
}
export default Hp;
