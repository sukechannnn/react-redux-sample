import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Counter } from "./features/counter/counter";
import { Todo } from "./features/todo/todo";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </div>
  );
};

export default App;
