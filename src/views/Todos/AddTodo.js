import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    tilte: "",
  };

  handleChangeTilte = (e) => {
    this.setState({
      tilte: e.target.value,
    });
  };

  handleSubmit = (e) => {
    if (!this.state.tilte) {
      toast.error("Title Empty");
      return;
    }
    e.preventDefault();
    let todo = {
      id: Math.floor(Math.random() * 100000),
      tilte: this.state.tilte,
    };
    this.props.Addnewtodo(todo);
  };

  render() {
    return (
      <>
        <div className="add-todo">
          <input type="text" onChange={(e) => this.handleChangeTilte(e)} />
          <button type="submit" onClick={(e) => this.handleSubmit(e)}>
            Add
          </button>
        </div>
      </>
    );
  }
}

export default AddTodo;
