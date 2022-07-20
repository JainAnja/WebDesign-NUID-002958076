import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Nav1 } from "./App/Navbar/Nav1";
import Home from "../src/App/Home";
import Jobs from "../src/App/Jobs";
import About from "../src/App/About";
import Contact from "../src/App/Contact";

export default function App() {
  return (
    <Router>
      <Nav1/>
        {/*
        */}
        <hr /><br />
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}

