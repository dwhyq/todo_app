import React, { useState, useEffect } from "react";
import Task from "./task";
import Navbar from "./navbar";
import { generateUniqueId } from "../utils"

const TaskList = () => {
  const [tasks, setTask] = useState([]);
  const [editTaskId, setEditTaskId] = useState(null);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");

  //this code creates a new task
  const handleCreateTask = (e) => {
    //edit task code
    if (editTaskId) {
      const selectedTask = tasks.map((task) => {
        if (task.id == editTaskId) {
          task.title = newTaskTitle;
          task.date = newTaskDate;
        }
        return task;
      });
      setEditTaskId(null);
      setTask(selectedTask);
    } else {
      setTask([
        ...tasks,
        {
          title: newTaskTitle,
          date: newTaskDate,
          completed: false,
          id: generateUniqueId(),
          important: false,
        },
      ]);
    }
    setNewTaskTitle("");
    setNewTaskDate("");
  };
  //this code marks a task as complete when done
  const handleCompleteTask = (id) => {
    const selectedTask = tasks.map((task) => {
      if (task.id == id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTask(selectedTask);
  };
  const handleEditTask = (id) => {
    const taskToEdit = [...tasks].find((task) => task.id === id);
    setNewTaskTitle(taskToEdit.title);
    setNewTaskDate(taskToEdit.date);

    setEditTaskId(taskToEdit.id);
  };
  //this code deletes a task
  const handleDeleteTask = (id) => {
    const taskToDelete = [...tasks].filter((task) => task.id !== id);
    setTask(taskToDelete);
  };
  //this code prioritizes task by pushing the important task to the top when clicked
  const handleImportantTask = (id) => {
    let importantTask = tasks.map((task) => {
      if (task.id === id) {
        task.important = !task.important;
      }
      return task;
    });
    importantTask.sort((a, b) => b.important - a.important);
    setTask(importantTask);
  };
  //Remove past date from the calendar
  const disablePastDate = new Date().toISOString().slice(0, 16);

  //validate user todo input
  const isValidated = newTaskTitle.trim() !== "" && newTaskDate !== "";

  return (
    <div className="relative h-screen overflow-hidden flex flex-col justify-center">
      <div className="tasks transition-shadow w-9/12 mt-15 p-3 rounded-xl overflow-auto sm-sc:w-full m-auto">
        {tasks.map((task) => (
          <Task
            task={task}
            key={task.id}
            handleChange={handleCompleteTask}
            handleDeleteTask={handleDeleteTask}
            handleImportantTask={handleImportantTask}
            handleEditTask={handleEditTask}
          />
        ))}
      </div>

      <div className="fixed bottom-5 self-center flex justify-center m-auto text-center border-2 rounded-full lg:w-[778px] lg: sm:text-1xl md:m-auto md:lg:text-2xl overflow-hidden">
        <input
          value={newTaskTitle}
          onChange={(e) => {
            setNewTaskTitle(e.target.value);
          }}
          type="text"
          className="bg-white w-full rounded-bl-full rounded-tl-full p-2 text-xl outline-none border-r-0 sm:text-1xl sm-sc:border-r-0 sm:text-1xl sm-sc:text-xs sm-sc:w-full md:lg:text-2xl lg:w-full"
          placeholder="Type your To-Do here"
        />

        <div className="relative flex justify-between w-full rounded-full align-middle m-auto border-l-0 p-1 bg-white md:lg:text-2xl text-center sm:text-1xl rounded-bl-none rounded-tl-none sm-sc:border-l-0 sm-sc:p-[0.5px] sm-sc:w-7/12">
          <input
            value={newTaskDate}
            onChange={(e) => {
              setNewTaskDate(e.target.value);
            }}
            type="datetime-local"
            min={disablePastDate}
            className="m-auto bg-white rounded-tr-full rounded-br-full text-xl outline-none border-none sm:w-fit sm-sc:text-xs sm-sc:w-fit sm-sc:px-[5px] sm-sc:rounded-bl-full sm-sc:rounded-tl-full md:-w-fit md:lg:text-2xl "
          />

          <button
            onClick={handleCreateTask}
            disabled={!isValidated}
            className="todoBtn bg-blue-700 text-3xl font-bold p-2 text-center text-white hover:bg-blue-400 hover:text-black rounded-tr-full rounded-br-full cursor-pointer sm-sc:p-3 sm-sc:text-2xl sm-sc:border-2"
            style={
              editTaskId ? { background: "green", fontSize: "1.1rem" } : {}
            }
          >
            {editTaskId ? "save" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
