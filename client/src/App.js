import React, {useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from './containers/Home/Home'
import About from './containers/About/About'
import Portfolio from './containers/Portfolio/Portfolio'
import Contact from './containers/Contact/Contact'
import NoMatch from './containers/NoMatch/NoMatch';

function App() {
  useEffect(() => {
    axios.get("/api/config")
    .then((res) => {
      console.log(res.data)
    })
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/portfolio" component={Portfolio}/>
        <Route exact path="/contact" component={Contact}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  );
}

export default App;
