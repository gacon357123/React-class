import React from "react";
import AddTodo from "./AddTodo";
import "./ListTodo.scss";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodos: [
      { id: 123, tilte: "Cook" },
      { id: 223, tilte: "Home" },
      { id: 333, tilte: "Work" },
    ],
    edit: {},
  };

  Addnewtodo = (todo) => {
    this.setState({
      listTodos: [...this.state.listTodos, todo],
    });
    toast.success("Success");
  };

  handleDel = (todo) => {
    let curren = this.state.listTodos;
    curren = curren.filter((item) => item.id !== todo.id);
    this.setState({
      listTodos: curren,
    });
    console.log("todo:", todo);
  };

  handleEdit = (todo) => {
    let { edit, listTodos } = this.state;
    let isEmpty = Object.keys(edit).length === 0;
    if (isEmpty === false && edit.id === todo.id) {
      let listTodoscopy = [...listTodos];
      let objIndex = listTodoscopy.findIndex((item) => item.id === todo.id);
      listTodoscopy[objIndex].tilte = edit.tilte;
      this.setState({
        listTodos: listTodoscopy,
        edit: {},
      });
      toast.success("Edit success");
      return;
    }

    this.setState({
      edit: todo,
    });
  };

  handleChangetodo = (e) => {
    let edittodo = { ...this.state.edit };
    edittodo.tilte = e.target.value;
    this.setState({
      edit: edittodo,
    });
  };

  render() {
    let { listTodos, edit } = this.state;
    let isEmpty = Object.keys(edit).length === 0;

    return (
      <>
        <div className="list-todo-container">
          <AddTodo Addnewtodo={this.Addnewtodo} />
          <div className="list-todo-content">
            {listTodos &&
              listTodos.length > 0 &&
              listTodos.map((item, index) => {
                return (
                  <div key={item.id} className="Todo-child">
                    {isEmpty === true ? (
                      <span>
                        {index + 1}-{item.tilte}
                      </span>
                    ) : (
                      <>
                        {edit.id === item.id ? (
                          <span>
                            {index + 1}-
                            <input
                              style={{ width: "83%" }}
                              value={edit.tilte}
                              onChange={(e) => this.handleChangetodo(e)}
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1}-{item.tilte}
                          </span>
                        )}
                      </>
                    )}
                    <div className="btn-del-edit">
                      <button onClick={() => this.handleEdit(item)}>
                        {isEmpty === false && edit.id === item.id
                          ? "Save"
                          : "Edit"}
                      </button>
                      <button onClick={() => this.handleDel(item)}>Del</button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default ListTodo;
