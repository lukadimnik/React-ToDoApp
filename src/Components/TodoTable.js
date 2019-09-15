import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const TodoTable = props => {
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
        <button onClick={props.deleteTodo} id={index}>
          Delete
        </button>
      ),
      filterable: false
    }
  ];
  return (
    <div>
      <ReactTable
        data={props.todos}
        columns={columns}
        defaultPageSize={10}
        filterable={true}
      />
    </div>
  );
};

export default TodoTable;
