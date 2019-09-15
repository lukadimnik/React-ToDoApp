import React, { useState } from "react";
import "./App.css";
import TodoTable from "./Components/TodoTable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AppRouter from "./Components/Approuter";

function App() {
  const [desc, setDesc] = useState({
    description: "",
    date: ""
  });
  const [todos, setTodos] = useState([]);

  const addTodo = event => {
    event.preventDefault();
    //continues
    setTodos([...todos, desc]);
    setDesc({
      description: "",
      date: ""
    });
  };

  const inputChanged = event => {
    setDesc({
      ...desc,
      [event.target.name]: event.target.value
    });
  };

  const deleteTodo = event => {
    event.preventDefault();
    console.log(event.target.id);
    setTodos(
      todos.filter((todo, index) => parseInt(event.target.id) !== index)
    );
  };

  return (
    <div className="App">
      {/* <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/">Contact</Link>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter> */}
      <AppRouter />
      <h1 className="h1">ToDoList</h1>
      <form onSubmit={addTodo}>
        <fieldset>
          <legend>Add todo</legend>
          <span>Description: </span>
          <input
            type="text"
            name="description"
            value={desc.description}
            onChange={inputChanged}
          />
          <span>Date: </span>
          <input
            type="date"
            name="date"
            value={desc.date}
            onChange={inputChanged}
          />
          <input type="submit" value="Add" />
        </fieldset>
      </form>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
