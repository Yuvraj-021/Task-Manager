export const ADD_TASK='ADD_TASK';
export const DELETE_ALL='DELETE_TASK';
export const REMOVE_TASK='REMOVE_TASK';
export const UPDATE_TASK='UPDATE_TASK';
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX';

export const addTask=(payload)=>{
    return{
        type:ADD_TASK,
        payload
    }
}

export const deleteAll=()=>{
    return{
        type: DELETE_ALL
    }
}

export const updateTask=(payload)=>{
    return{
        type:UPDATE_TASK,
        payload
    }
}

export const removeTask=(payload)=>{
    return{
        type:REMOVE_TASK,
        payload
    }
}

export const handleCheckbox=(payload)=>{
    return{
        type: UPDATE_CHECKBOX,
        payload
    }
}
