
import { useSelector, useDispatch } from 'react-redux'
import { createStore } from "redux"
import { StrictMode, useState, useRef, useEffect, memo } from 'react'
import { Provider } from "react-redux"
import { combineReducers } from 'redux';
import { addLang, positionReducer } from './components/stateStorege/reducers';
import { todoReducer } from './components/stateStorege/reducers';
import { pos } from './components/stateStorege/reducers';
import { rem } from './components/stateStorege/reducers';
import { removedArr } from './components/stateStorege/reducers';
export const rootReducer = combineReducers({
  todos: todoReducer,
  positions: positionReducer,
  langg: addLang, 
 pos: pos,
 rem:rem,
 removedArr: removedArr
});

export const store = createStore(rootReducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());
