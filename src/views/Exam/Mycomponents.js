import React from "react";
import Childcomponent from "./Childcomponent";
import Addcomponent from "./Addcomponent";

class MyComponent extends React.Component {
  state = {
    arr: [
      { id: 1231, title: "Dev", salary: "200" },
      { id: 1211, title: "Test", salary: "300" },
      { id: 1421, title: "Manager", salary: "600" },
    ],
  };

  AddnewJob = (job) => {
    console.log("check arr from parents", job);
    this.setState({
      arr: [...this.state.arr, job],
    });
  };

  DeleteAJob = (job) => {
    let currenJob = this.state.arr;
    currenJob = currenJob.filter((items) => items.id !== job.id);
    this.setState({
      arr: currenJob,
    });
  };

  render() {
    return (
      <>
        <Addcomponent arr={this.state.arr} AddnewJob={this.AddnewJob} />
        <Childcomponent arr={this.state.arr} DeleteAJob={this.DeleteAJob} />
      </>
    );
  }
}

export default MyComponent;
