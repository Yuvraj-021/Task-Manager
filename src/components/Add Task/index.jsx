import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import "./style.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

const AddTask = () => {

  const dispatch=useDispatch();
  const [newTask, setNewTask]=useState('');

  const addNewTask=(task)=>{
    console.log(task);
    let date = new Date();
    let time = date.getTime();
    let taskObj={
      id: time,
      task: task,
      completed: false
    } 
    setNewTask('');
    dispatch(addTask(taskObj))
  }

  return (
    <>
      <Grid container spacing={1}>
        <Grid item sx={6} md={6} className="add-task-grid-item">
          <TextField
            id="outlined-search"
            label="Add Task"
            type="search"
            className="searchtextfield"
            value={newTask}
            onChange={(e)=>setNewTask(e.target.value)}
          />
        </Grid>
        <Grid item sx={3} md={3}>
          <Button
          variant="contained"
          className="add-task-btn"
          onClick={()=>addNewTask(newTask)}
          >
          Add Task
          </Button>
        </Grid>
        <Grid>

        </Grid>
      </Grid>
    </>
  );
};

export default AddTask;
