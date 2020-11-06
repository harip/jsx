// Import the react
import React from 'react';
import ReactDOM from 'react-dom';

// Create component
const App = () => {
  return <div>Hi there!</div>
};

// Take the component and show it on screen
ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);