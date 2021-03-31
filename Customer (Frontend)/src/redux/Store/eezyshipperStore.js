import { createStore } from "redux";
import { eezyshipperReducer } from "../Reducers/eezyshipperReducers";

export const eezyshipperStore = createStore(eezyshipperReducer)