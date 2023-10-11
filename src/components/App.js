import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [chosenId, setChosenId] = useState("All")
  const [Tasks, setTasks] = useState(TASKS);
  
  function handleSelect(item){
    let newTask = Tasks.filter(i => i.category === item || item === "All")
    setChosenId(() => item)
    setTasks(() => newTask)
  }
  function onTaskFormSubmit(item){
    setTasks((Tasks) => [...Tasks, item])
  }
  function onDelete(id){
    const newTask = Tasks.filter((_, i) => i !== id)
    setTasks(() => newTask)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} chosenId={chosenId} handleSelect={handleSelect} />
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES} />
      <TaskList chosenId={chosenId} tasks={Tasks} onDelete={onDelete} />
    </div>
  );
}

export default App;

