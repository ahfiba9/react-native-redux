import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from './rootReducers';
import { Counter } from "../counter/redux/counterStates";
import { Todo } from "../todo/redux/todoStates";

export interface GlobalState {
  counterStates: Counter
  todoStates: Todo
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [thunk];

const enhancer = composeEnhancers(applyMiddleware(...middleware));

export default createStore(reducers, enhancer);
