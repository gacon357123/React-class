import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
  state = {
    ListUsers: [],
  };
  async componentDidMount() {
    let res = await axios.get("https://reqres.in/api/users?page=2");
    console.log("check res:", res.data.data);
    this.setState({
      ListUsers: res && res.data && res.data.data ? res.data.data : [],
    });
  }
  handleDetailUSer = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };

  render() {
    let { ListUsers } = this.state;
    return (
      <div className="list-user-container">
        <div className="list-user-content">
          {ListUsers &&
            ListUsers.length > 0 &&
            ListUsers.map((item, index) => {
              return (
                <div
                  className="child"
                  key={item.id}
                  onClick={() => this.handleDetailUSer(item)}
                >
                  {index + 1}-{item.first_name} {item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withRouter(ListUser);
