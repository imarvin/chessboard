import React from 'react';
import './App.css';
import { ChessTable } from './components/ChessTable/';

function App() {
  return (
    <div className="App">
      <h1>Chessboard Generator</h1>
      <ChessTable />
    </div>
  );
}

export default App;
