import { ADD_ALL_WAREHOUSES, ADD_CURRENT_USER, ADMIN_CHANGE_EVENT_CALL, DELETE_CONFIRMATION_STATE } from "../Actions/eeztshipperActions";

const initiatState = {
    contentChanger : 'summery',
    currentUser: {},
    deleteConfirmationState: false,
    allWarehouses: []
}

export const eezyshipperReducer = (state = initiatState, action) =>{
    switch(action.type){
        case ADMIN_CHANGE_EVENT_CALL : 
            return {...state, contentChanger: action.contentName}
        case ADD_CURRENT_USER:
            return{...state, currentUser: action.user}
        case DELETE_CONFIRMATION_STATE:
            return{...state, deleteConfirmationState: action.stateToggler}
        case ADD_ALL_WAREHOUSES:
            return{...state, allWarehouses: action.whList}
        default :
            return state;
    }
}