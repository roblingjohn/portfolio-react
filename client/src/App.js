import React from "react";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Portfolio from "./containers/Portfolio/Portfolio";
import ProjectPage from "./containers/ProjectPage/ProjectPage";
import Contact from "./containers/Contact/Contact";
import NoMatch from "./containers/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route path="/project/:title" component={ProjectPage} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
