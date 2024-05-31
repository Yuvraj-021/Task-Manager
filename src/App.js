import logo from "./logo.svg";
import "./App.css";
import AddTask from "./components/Add Task";
import Task from "./components/TaskList";
import TaskList from "./components/TaskList";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { deleteAll } from "./redux/actions";

function App() {

  const dispatch=useDispatch();
  const tasks = useSelector((state)=> state.operationsReducer);

  return (
    <>
      <div className="App">
       <AddTask/>
       <TaskList/>
        {tasks.length>1 && (
          <Button variant="contained" onClick={()=>dispatch(deleteAll())}>DELETE ALL</Button>
        )}
      </div>
    </>
  );
}

export default App;
