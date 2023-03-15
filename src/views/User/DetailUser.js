import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUSer extends React.Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }

  render() {
    let { user } = this.state;
    let isEmpty = Object.keys(user).length === 0;

    return (
      <>
        <div>Detail: {this.props.match.params.id}</div>
        {isEmpty === false && (
          <>
            <div>
              User name: {user.first_name} {user.last_name}
            </div>
            <div>User email: {user.email}</div>
            <div>
              <img src={user.avatar} alt="avatar" />
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(DetailUSer);
