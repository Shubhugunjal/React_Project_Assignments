import React, { useState } from "react";
import "../styles/homeStyle.css";

export const Home = () => {
  const [inputTask, setInputTask] = useState();
  const [allTask, setAllTask] = useState([]);

  const handleNewTask = (e) => {
    const { value } = e.target;
    setInputTask(value);
  };
  const handleAddTask = (e) => {
    e.preventDefault();

    //take all task in array
    setAllTask((prev) => [...prev, inputTask]);
    console.log("Task Added :", inputTask);

    //clear input field after adding  newTask
    setInputTask("");
  };

  return (
    <>
      <h1> To Do Application</h1>
      <div className="inputBox">
        <input
          type="text"
          placeholder="Add New Task"
          required
          value={inputTask}
          onChange={handleNewTask}
        ></input>
        <button type="submit" onClick={handleAddTask} className="addTaskBtn">
          Add Task
        </button>
      </div>
      <div className="taskList">
        <ul>
          {allTask.map((task, index) => {
            return <li className="listedTask" key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
