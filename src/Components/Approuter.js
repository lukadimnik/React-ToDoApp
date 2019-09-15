import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>This is home page</h2>;
}

function About() {
  return <h2>This is about page</h2>;
}

function Contact() {
  return (
    <div>
      <h2>This is contact page</h2>
      <p>Name: Luka Dimnik</p>
      <p>Contact: luka.dimnik88@gmail.com</p>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <span>
            {" "}
            <Link to="/">Home</Link> <Link to="/about/">About</Link>{" "}
            <Link to="/contact/">Contact</Link>
          </span>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </div>
    </Router>
  );
}

export default AppRouter;
