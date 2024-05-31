import { ADD_TASK, DELETE_ALL } from "../actions";

const initialState=[
    {id:1, task:"Solve 1 DSA Problem", completed:false},
    {id:2, task:"Master REDUX", completed:false},
    {id:3, task:"Buy Laptop", completed:false},
    {id:4, task:"Complete Office Work", completed:false},

];

export const operationsReducer=(state=initialState,action)=>{
    switch(action.type){
        case ADD_TASK:
            return[...state,action.payload];
        case DELETE_ALL:
            return[]
        default: return state;
    }
}