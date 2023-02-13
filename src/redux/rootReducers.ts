import { combineReducers } from "redux";
import { counterStates } from "../counter/redux/counterStates";
import { todoStates } from "../todo/redux/todoStates";

export default combineReducers({
  counterStates: counterStates,
  todoStates: todoStates
})
