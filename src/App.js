import React from 'react';
import './App.css';
// import Form from './components/form'
import Surge from './components/surge'

class App extends React.Component {
  render () {
  return (
    <div className="App">
      <header className="App-header">
        Swiggy Price Surge Model
      </header>
      {/* <Form /> */}
      <Surge />
    </div>
  );
  }
}

export default App;
