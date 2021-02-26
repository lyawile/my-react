import React from "react";
import GoalList from "./components/Goals/GoalList";
import Button from './components/Buttons/Button'
import Counter from './components/Counter/Counter'
import "./index.css";

const App = () => {
  const goals = [
    { id: 1, text: "Wake up in the morning" },
    { id: 2, text: "Get breakfast" },
    { id: 3, text: "Go to library" },
  ];
  return (
    <div>
      <h1>List of Goals</h1>
      <GoalList goals = {goals} />
      <Button label="hello friends" />
      <Counter />
    </div>
  );
};

export default App;
