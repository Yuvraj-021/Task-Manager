import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/Add Task";
import Task from "./components/TaskList";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { deleteAll } from "./redux/actions";
import { useState } from "react";
import Headers from "./components/Headers";

function App() {
  //dispatch function to dispatch an action
  const dispatch = useDispatch();

  //getting tasks state for conditional rendering
  const tasks = useSelector((state) => state.operationsReducer);

  // update form visibility state
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  // editTodo state
  const [editTask, setEditTask] = useState("");

  // this function will trigger when someone clicks the edit icon
  const handleEditClick = (task) => {
    setEditFormVisibility(true);
    setEditTask(task);
    //console.log(task);
  };

  // back button click
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  };

  return (
    <>
      <div className="App">
        <Headers/>
        <AddTask
          editFormVisibility={editFormVisibility}
          editTask={editTask}
          cancelUpdate={cancelUpdate}
        />
        <TaskList
          handleEditClick={handleEditClick}
          editFormVisibility={editFormVisibility}
        />
        {tasks.length > 1 && (
          <Button variant="contained" className="delete-all-btn" onClick={() => dispatch(deleteAll())}>
            DELETE ALL
          </Button>
        )}
      </div>
    </>
  );
}

export default App;
