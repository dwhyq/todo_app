import React from "react";
import TaskList from "./components/taskList";
import Navbar from "./components/navbar"
import "./App.css"

function App() {
  return (
    <div className="App bg-gray-50">
      <Navbar />
      <TaskList />
    </div>
  );
}

export default App;
