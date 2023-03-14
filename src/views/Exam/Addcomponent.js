import React from "react";

class Addcomponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };

  handeChangeTilteJob = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handeChangeSalary = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input: ", this.state);
    this.props.AddnewJob({
      id: Math.floor(Math.random() * 100000),
      title: this.state.title,
      salary: this.state.salary,
    });

    this.setState({
      title: "",
      salary: "",
    });
  };

  render() {
    return (
      <form>
        <label htmlFor="fname">Tilte Job:</label>
        <br />
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.handeChangeTilteJob(event)}
        />
        <br />
        <label htmlFor="lname">salary:</label>
        <br />
        <input
          type="text"
          value={this.state.salary}
          onChange={(event) => this.handeChangeSalary(event)}
        />
        <br />
        <br />
        <input type="submit" onClick={(event) => this.handleSubmit(event)} />
      </form>
    );
  }
}

export default Addcomponent;
