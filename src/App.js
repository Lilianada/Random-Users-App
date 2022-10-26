import './App.css';
import React from 'react';
import DisplayUsers from './components/Users/Users';
import Home from './components/Home/Home';
import ErrorPage from './components/404Page/404Page';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <ErrorPage/>
    </div>
  );
}

export default App;
