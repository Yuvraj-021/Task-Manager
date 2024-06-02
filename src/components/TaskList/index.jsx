import React from "react";
import Icon from "react-icons-kit";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { Edit } from "@mui/icons-material";
import { handleCheckbox, removeTask, updateTask } from "../../redux/actions";

const TaskList = ({ handleEditClick, editFormVisibility }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.operationsReducer);
  return tasks.map((currentTask) => (
    <div key={tasks.id} className="todo-box">
      <div className="content">
        {editFormVisibility === false && (
          <input
            type="checkbox"
            checked={currentTask.completed}
            onChange={() => dispatch(handleCheckbox(currentTask.id))}
          ></input>
        )}

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
        {editFormVisibility === false && (
          <>
            <span onClick={()=>handleEditClick(currentTask)}>
              <Edit />
            </span>
            <span onClick={()=>dispatch(removeTask(currentTask.id))}>
              <DeleteIcon  />
            </span>
          </>
        )}
      </div>
    </div>
  ));
};

export default TaskList;
