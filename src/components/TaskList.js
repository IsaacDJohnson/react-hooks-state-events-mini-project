import React from "react";
import Task from './Task'


function TaskList({tasks, onDelete}) {
  let taskData = tasks ? tasks : []


  return (
    <div className="tasks">
      {taskData.map((item, i)=>
        <Task 
        onDelete={()=> onDelete(i)} 
        key={i} 
        text={item.text}
        category={item.category}
        />
      )}
    </div>
  );
}

export default TaskList;
