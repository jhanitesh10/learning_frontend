import React, { Component } from 'react';
import logo from './logo.svg';
// import { Router, Route } from "react-router";
// import { BrowserRouter, Link, Switch } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.css';

import Index from './component/indexComponent.js';
import Create from './component/createComponent.js';
import Edit from './component/editComponent.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">React Express App</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item"><Link className="nav-link" to={'/'}>Home</Link></li>
                  <li className="nav-item"><Link className="nav-link" to={'/index'}>Index</Link></li>
                  <li className="nav-item"><Link className="nav-link" to={'/create'}>Create</Link></li>
                  <li className="nav-item"><Link className="nav-link" to={'/edit/:id'}>Edit</Link></li>
              </ul>
            </div>
          </nav>

           <Switch>
             <Route exact path='/' component={Create}></Route>
             <Route path='/edit/:id' component={Edit}></Route>
             <Route path='/index' component={Index}></Route>
             <Route path='/index' component={Index}></Route>
           </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
