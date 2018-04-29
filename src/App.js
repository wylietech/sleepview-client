import React, { Component } from 'react';
import logo from './logo.svg';
import NavigationBar from './NavigationBar';
import SleepSummaryTable from './SleepSummaryTable';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SleepView</h1>
        </header>
       <NavigationBar/>
       <SleepSummaryTable/>
       
      </div>
    );
  }
}

export default App;
