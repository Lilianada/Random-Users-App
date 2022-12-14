import './App.css';
import React from 'react';
import DisplayUsers from './components/Users/Users';
import Home from './components/Home/Home';
import ErrorPage from './components/404Page/404Page';
import { Route, Routes } from 'react-router-dom';
import Help from './components/Help/Help';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/users" element={<DisplayUsers />} />

      </Routes>
    </div>
  );
}

export default App;
