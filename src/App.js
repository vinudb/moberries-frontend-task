import React from 'react';
import 'normalize.css';
import './App.scss';
import SubscriptionApp from './components/SubscriptionApp';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="title">THE BEATS</div>
        <SubscriptionApp />
      </div>
    </div>
  );
}

export default App;
