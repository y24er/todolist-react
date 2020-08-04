import React from 'react';
import './App.css';
import ToDoFormContainer from "./containers/ToDoFormContainer";
import ToDoListContainer from "./containers/ToDoListContainer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoFormContainer/>
        <ToDoListContainer/>
      </header>
    </div>
  );
}

export default App;
