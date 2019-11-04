import ReactTable from "react-table";
import "react-table/react-table.css";
import React, { useState } from "react";

const TodoTable = () => {
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

  const columns = [
    {
      Header: "Description",
      accessor: "description"
    },
    {
      Header: "Date",
      accessor: "date" // String-based value accessors!
    },
    {
      Cell: ({ index }) => (
        <button onClick={deleteTodo} id={index}>
          Delete
        </button>
      ),
      filterable: false
    }
  ];
  return (
    <div className="App">
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
      <ReactTable
        data={todos}
        columns={columns}
        defaultPageSize={10}
        filterable={true}
      />{" "}
    </div>
  );
};

export default TodoTable;
