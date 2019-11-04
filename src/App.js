import React from "react";
import "./App.css";
import TodoTable from "./Components/TodoTable";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <span>
              {" "}
              <Link to="/">Todolist</Link> <Link to="/contact/">Contact</Link>
            </span>
          </nav>
          <Route path="/" exact component={TodoTable} />
          <Route path="/contact/" component={Contact} />
        </div>
      </Router>
    </div>
  );
}

export default App;
