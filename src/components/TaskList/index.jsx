import React from "react";
import Icon from "react-icons-kit";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import "./style.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { Edit } from "@mui/icons-material";

const TaskList = () => {
  const tasks = useSelector((state) => state.operationsReducer);
  return tasks.map((currentTask) => (
    <div key={tasks.id} className="todo-box">
      <div className="content">
        <input type="checkbox" checked={currentTask.completed}></input>
        <p
          style={
            currentTask.completed === true
              ? { textDecoration: "line-through" }
              : { textDecoration: "none" }
          }
        >
          {currentTask.task}
        </p>
      </div>
      <div className="actions-box">
        <span>
         <Edit/>
        </span>
        <span>
        <DeleteIcon/>
        </span> 
      </div>
    </div>
  ));
};

export default TaskList;
