// Import the react
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click Me';
}

// Create component
const App = () => { 
  return  (
    <div>
      <label className="label" for="name">Enter Name:</label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>{getButtonText()}</button>
    </div>
  );
};

// Take the component and show it on screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);