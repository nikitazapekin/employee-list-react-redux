
import { useSelector, useDispatch } from 'react-redux'
import { createStore } from "redux"
import { StrictMode, useState, useRef, useEffect, memo } from 'react'
import { Provider } from "react-redux"
const counter = (state = [], action) => {
switch (action.type) {
  case "SHOW": {
    state.push(action.todoArrayy)
    console.log(state)
    return state
  }
  case "SHOWARRAY": {
    state.push(action.todoArrayy)
    state = state.filter((item, index) => {
      return state.indexOf(item) === index;
    });
    console.log(state)
    return state
  }
  case "DEL": {
    return state.filter(item=> item!=action.todoArrayy)
  }
 default: {
  return  state;
 }
  }
}
export const show = (todoArrayy) => ({
  type: "SHOW",

  todoArrayy,
}) 

export const showArray = (todoArrayy) => ({
  type: "SHOWARRAY",

  todoArrayy,
}) 

export const del = (todoArrayy) => ({
  type: "DEL",

  todoArrayy,
}) 
export const store = createStore(counter,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export const store2 = createStore(counter, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION());