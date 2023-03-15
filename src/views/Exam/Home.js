import React from "react";
import { withRouter } from "react-router";

class Home extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }

  render() {
    return (
      <>
        <div>helo</div>
      </>
    );
  }
}

export default withRouter(Home);
