import React, { useState } from "react";
import "../styles/homeStyle.css";
import { EditOption } from "../components/EditOption";


export const Home = () => {
  const [inputTask, setInputTask] = useState();
  const [allTask, setAllTask] = useState([]);

  //handles the new task
  const handleNewTask = (e) => {
    const { value } = e.target;
    setInputTask(value);
  };

  //handles the Task after AddTask button clicked
  const handleAddTask = (e) => {
    e.preventDefault();

    //take all task in array
    setAllTask((prev) => [...prev, inputTask]);
    console.log("Task Added :", inputTask);

    //clear input field after adding  newTask
    setInputTask("");
  };

  //handles the Update Task
  const handleUpdateTask = (editTask, index) => {
    const editedTask = [...allTask];
    editedTask[index] = editTask;
    setAllTask(editedTask);
  };

  //handle Delete Task
  const handleDeleteTask = (indexTobeDelete) => {
    const newArrayAfterDeleteTask = allTask.filter(
      (_, index) => index !== indexTobeDelete
    );
    setAllTask(newArrayAfterDeleteTask);
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
            return (
              <li className="listedTask" key={index}>
              
                <EditOption
                  task={task}
                  index={index}
                  onUpdate={handleUpdateTask}
                  onDelete={handleDeleteTask}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
