import React from 'react';
import './App.css';
import PathFindingVisualizer from './components/PathFindingVisualizer';
import SortingVisualizer from './components/SortingVisualizer';

function App() {
  return (
    <div className="App">
      <PathFindingVisualizer /> 
      <SortingVisualizer />
    </div>
  );
}

export default App;
