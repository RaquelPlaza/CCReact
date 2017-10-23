import React, { Component } from 'react';

import './assets/styles/app.css';

import InvestmentsPage from './components/pages/investmentsPage/investmentsPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InvestmentsPage pageTitle="Investment opportunities"/>
      </div>
    );
  }
}

export default App;
