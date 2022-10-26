import './App.css';
import React from 'react';
import DisplayUsers from './components/Users/Users';
import Home, { Help } from './components/Home/Home';
import ErrorPage from './components/404Page/404Page';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/help" element={<Help />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/users" element={<DisplayUsers />} />
      </Routes>
    </div>
  );
}

export default App;
