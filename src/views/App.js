import "./App.scss";
import MyComponent from "./Exam/Mycomponents";
import ListTodo from "./Todos/ListTodo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Exam/Home";
import ListUser from "./User/ListUser";
import DetailUSer from "./User/DetailUser";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <Switch>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about" exact>
              <MyComponent />
            </Route>
            <Route path="/user/:id">
              <DetailUSer />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </header>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </BrowserRouter>
  );
};

export default App;
