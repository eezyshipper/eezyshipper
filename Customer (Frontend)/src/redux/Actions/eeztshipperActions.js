export const ADMIN_CHANGE_EVENT_CALL = 'ADMIN_CHANGE_EVENT_CALL';
export const ADD_CURRENT_USER = 'ADD_CURRENT_USER';
export const DELETE_CONFIRMATION_STATE = 'DELETE_CONFIRMATION_STATE';
export const ADD_ALL_WAREHOUSES = 'ADD_ALL_WAREHOUSES';

export const contentChange = contentName => {
    return {type : ADMIN_CHANGE_EVENT_CALL, contentName}
}

export const setCurrentUser = user => {
    return{
        type: ADD_CURRENT_USER,
        user
    }
}

export const setDeleteConfirmationState = state => {
    return{
        type: DELETE_CONFIRMATION_STATE,
        stateToggler:state
    }
}

export const setAllWarehouses = whList => {
    return{
        type: ADD_ALL_WAREHOUSES,
        whList
    }
}

