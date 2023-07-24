import React from 'react';
import './App.css';
import { Outlet } from 'react-router';

function App() {
  return (
    <div className="App_Container">
      <div className="App_Wrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default App;