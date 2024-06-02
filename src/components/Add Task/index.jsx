import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import "./style.css";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/actions";

const AddTask = ({ editFormVisibility, editTask, cancelUpdate }) => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const [editValue, setEditValue] = useState("");

  // useEffect is to show the (to edit) value in update form
  useEffect(() => {
    setEditValue(editTask.task);
    //console.log(editTask.task)
  }, [editTask]);

  const addNewTask = (task) => {
    console.log(task);
    let date = new Date();
    let time = date.getTime();
    let taskObj = {
      id: time,
      task: task,
      completed: false,
    };
    setNewTask("");
    dispatch(addTask(taskObj));
  };
  // update form submit
  const handleEditTask = (task) => {
    //e.preventDefault();

    let editedObj = {
      id: editTask.id,
      task: editValue,
      completed: false,
    };
    //console.log(editedObj)
    dispatch(updateTask(editedObj));
  };

  return (
    <>
      {editFormVisibility === false ? (
        <div className="add-task-grid">
          <TextField
            id="outlined-search"
            label="Add Task"
            type="search"
            className="searchtextfield"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />

          <Button
            variant="contained"
            className="add-task-btn"
            onClick={() => addNewTask(newTask)}
          >
            Add Task
          </Button>
        </div>
      ) : (
        <div className="add-task-grid">
          <TextField
            id="outlined-search"
            label="Update Task"
            type="search"
            className="searchtextfield"
            value={editValue || ""}
            onChange={(e) => setEditValue(e.target.value)}
          />

          <Button
            variant="contained"
            className="add-task-btn"
            onClick={() => handleEditTask(editValue)}
          >
            Update Task
          </Button>

          <Button
            variant="contained"
            className="add-task-btn"
            onClick={cancelUpdate}
          >
            Back
          </Button>
        </div>
      )}
    </>
  );
};

export default AddTask;
