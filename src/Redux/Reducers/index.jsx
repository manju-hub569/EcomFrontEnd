import { combineReducers } from "redux";
import { incDecReduce , getReducer } from "./ChangeNum";

export const rootReducers = combineReducers({
    incDecReduce , getReducer
});