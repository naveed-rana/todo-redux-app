import React, { Component } from 'react';
import ShowData from './ShowData';
import AnOtherComponent from './AnOtherComponent';
import ChukData from './ChukData';
import QueueSystem from './QueueSystem';

class App extends Component {
  render() {
    return (
      <div className="App">
             <QueueSystem />
      </div>
    );
  }
}

export default App;
