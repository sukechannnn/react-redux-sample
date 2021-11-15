import React from "react";
import "./App.css";
import { Counter } from "./features/counter/counter";

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter />
    </div>
  );
};

export default App;
