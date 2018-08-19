import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThemeSwitcher from './Bodyselector.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        < ThemeSwitcher />
      </div>
    );
  }
}


export default App;
