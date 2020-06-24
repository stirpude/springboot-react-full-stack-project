//import React from 'react';
import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PerficientEmployeeHeading from './component/PerficientEmployeeHeading';
import UpdateEmpoyeeRouter from './component/UpdateEmployeeRouter'

class App extends Component {
  render() {
    return (
      <div className="container">
        <UpdateEmpoyeeRouter />
      </div>
    );
  }
}

export default App;
