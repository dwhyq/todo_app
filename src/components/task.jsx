import React from "react";
import PropTypes from "prop-types";
import { formatDate } from "../utils";

const Task = ({
  task,
  handleChange,
  handleDeleteTask,
  handleImportantTask,
  handleEditTask
}) => {
  return (
    <div
      className="task max-w-9/12 bg-white my-3 p-2 hover:shadow-md rounded-full border-2 m-auto sm-sc:w-full sm-sc:text-xs sm:w-full overflow-hidden"
      style={
        task.important
          ? { background: "blue", color: "white", fontWeight: "bold" }
          : {}
      }
    >
      <div className="max-w-9/12 flex justify-between items-center cursor-pointer rounded-xl  m-auto sm-sc:text-xs">
        <input
          className="cursor-pointer mr-3"
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            handleChange(task.id);
          }}
        />
        <div className="m-auto w-9/12 overflow-hidden sm-sc:text-xs sm-sc:w-1/2 sm:text-xs">
          <p className="flex w-full text-lg sm-sc:text-xs sm:text-xs sm-sc:w-full text-clip">
            {task.title}
          </p>
          <span className="font-bold rounded-full mr-3 sm-sc:text-xs sm:text-sm">
            {formatDate(task.date)}
          </span>
        </div>
        <div className="w-fit">
          <span
            className="bg-green-600 rounded-md p-1 text-1xl text-white sm-sc:text-xs sm:text-sm md:text-md"
            onClick={() => {
              handleEditTask(task.id)
            }}
          >
            Edit
          </span>
          <span
            className="bg-blue-600 rounded-md p-1 text-1xl m-1 text-white sm-sc:text-xs sm:text-sm md:text-md"
            onClick={() => {
              handleImportantTask(task.id);
            }}
          >
            Top
          </span>
          <span
            className="p-1 cursor-pointer rounded-md border-spacing-2 bg-red-600 text-white sm-sc:w-fit sm-sc:text-xs sm:text-sm md:text-md"
            onClick={() => {
              handleDeleteTask(task.id);
            }}
          >
            Delete
          </span>
        </div>
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  handleChange: PropTypes.func,
  handleDeleteTask: PropTypes.func,
  handleImportantTask: PropTypes.func,
  handleEditTask: PropTypes.func
};

export default Task;
