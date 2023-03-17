import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }
  handleDeleteUSer = (user) => {
    console.log("check click", user);
    this.props.deleteUSerRedux(user);
  };
  handleCreateUser = () => {
    this.props.addUserRedux();
  };

  render() {
    console.log("check props redux", this.props);
    let ListUser = this.props.dataRedux;
    return (
      <>
        <div>helo</div>
        <button onClick={() => this.handleCreateUser()}>ADD </button>
        <div>
          {ListUser &&
            ListUser.length > 0 &&
            ListUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1}-{item.name}{" "}
                  <span
                    style={{ color: "red" }}
                    onClick={() => this.handleDeleteUSer(item)}
                  >
                    X
                  </span>
                </div>
              );
            })}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return { dataRedux: state.users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUSerRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    addUserRedux: () => dispatch({ type: "CREATE_USER" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
