import React from 'react';
import Browse from './Browse'; 
import './style.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Store!</h1>
      </header>
      {/* Render Browse component here */}
      <Browse />
    </div>
  );
}

export default App;
