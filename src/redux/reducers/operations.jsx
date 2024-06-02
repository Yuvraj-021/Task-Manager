import {
  ADD_TASK,
  DELETE_ALL,
  REMOVE_TASK,
  UPDATE_CHECKBOX,
  UPDATE_TASK,
} from "../actions";

const initialState = [
  { id: 1, task: "Solve 1 DSA Problem", completed: false },
  { id: 2, task: "Master REDUX", completed: false },
  { id: 3, task: "Buy Laptop", completed: false },
  { id: 4, task: "Complete Office Work", completed: false },
];

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_ALL:
      return [];
    case REMOVE_TASK:
      const filteredTasks = state.filter((todo) => todo.id != action.payload);
      return filteredTasks;
    case UPDATE_TASK:
      let data = action.payload;
      //console.log(data)
      const updatedArray = [];
      state.map((item) => {
        if (item.id === data.id) {
          item.id = data.id;
          item.task = data.task;
          item.completed = data.completed;
        }
        updatedArray.push(item);
      });
      //console.log(updatedArray)
      return updatedArray;
    case UPDATE_CHECKBOX:
      let taskArray = [];
      state.map((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
        taskArray.push(item);
      });
      return taskArray;

    default:
      return state;
  }
};
