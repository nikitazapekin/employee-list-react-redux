


import { useSelector, useDispatch } from 'react-redux'
import { createStore } from "redux"
import { StrictMode, useState, useRef, useEffect, memo } from 'react'
import { Provider } from "react-redux"

const counter = (state = [], action) => {
  switch (action.type) {
    case "ADD": {
      return state.concat({
        text: action.payload.title
      })
    }
    case "REMOVE": {
                return state.filter((item, index) => index !== action.todoId)
    }
    default: {
      return state
    }
  }
}

export const add = (title) => ({
  type: "ADD",
  payload: { title }
})

export const remove = (todoId) => ({
    type: "REMOVE",
  
    todoId,
  }) 

export const store = createStore(counter)
