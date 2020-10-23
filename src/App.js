import React from "react";
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/core/Navbar";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Resume from "./components/pages/Resume";

function App() {
  return (
    <Router>
      <HashRouter basename="/">
        <NavBar />
        <Switch>
          <Route path="/contact-me" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
          <Route exact path="/" component={Home} />
          {/* <Route path="/home" component={Home} /> */}
          {/* <Route path="/portfolio" component={Home} /> */}
        </Switch>
      </HashRouter>
    </Router>
  );
}

export default App;
