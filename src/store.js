


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
    case "SELECT": {
console.log("state"+JSON.stringify(state))
console.log(action.todoArray)
 
return state.filter((item, index)=> {
  for(let i=0; i<action.todoArray.length; i++){
    if(String(index)===action.todoArray[i]){
      return action.todoArray[i]
    }
  }
})

    }
    case "SHOW": {
 // return action.todoArray
// return 1
//console.log(1)
/*return action.todoArray.forEach(element => {
  return element
}); */
console.log("from redux"+JSON.stringify(action.todoArrayy)) //from redux{"state":[]}
const arr =action.todoArrayy.state
//for(let i=0;i<state.length; i++)
state=[]
state=arr
console.log("stateeee"+JSON.stringify(state))
/*for(let i=0; i< action.todoArrayy.length; i++){
  console.log("1"+action.todoArrayy[i])
} */
return state.filter((item, index)=> {
 // console.log("itemm"+item)
 //return item+"1"
 return item
})  
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
  export const select = (todoArray) => ({
    type: "SELECT",
  
    todoArray,
  }) 
  export const show = (todoArrayy) => ({
    type: "SHOW",
  
    todoArrayy,
  }) 

export const store = createStore(counter,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
