/*
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, add, remove, select } from "./store"
import { useState, useRef, useEffect, memo } from 'react'
import "./App.css"

const Menu = memo(() => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  return (
    <>
      <input ref={inputRef} type="text" className="addInput" onChange={e => setValue(e.target.value)} />
      <button className="add" onClick={() => {
        dispatch(add(value))
      }}>add</button>
    </>
  )
})
export default function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state) 
  const [count, setCount] = useState(0)
  const [check, setCheck]=useState(false)
  //const [checks, setChecks] = useState(Array(itemList.length).fill(false));
  const deleteItem = (index) => {
   dispatch(remove(index))
  }
 // const countt=2
  const styles ={
 //   backgroundColor: countt===1 ? "red" : "green",
    width: "100px",
    height: "20px",
    position: "absolute",
    left: "53%",
    translateX: "-50%",
 marginBottom: "20px"
    
  }
 
  const selectItem=(index)=> {

dispatch(select(index))
setCheck(!check);
  }
  const elems = state.map((item, index) => {
    return (
      <div className="item" key={item.id}>
         {index+1}.
        {item.text} 
       
        <button onClick={() => deleteItem(index)}>Delete</button>
        <div className='ittem'style={{backgroundColor: check ? "green" : "red" , ...styles}}  onClick={() => selectItem(index)}>Select</div>
      </div>
    )
  })
  
  return (
    <div className="App">
      <h1>To-do list using react-redux technology</h1>
      <Menu />
      <div className="btns">
        <button>active</button>
        <button>all</button>
      </div>
      {elems}
    </div>
  )
} */


import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, add, remove, select } from "./store"
import { useState, useRef, useEffect, memo } from 'react'
import "./App.css"

const Menu = memo(() => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  return (
    <>
      <input ref={inputRef} type="text" className="addInput" onChange={e => setValue(e.target.value)} />
      <button className="add" onClick={() => {
        dispatch(add(value))
      }}>add</button>
    </>
  )
})

export default function App() {
  const dispatch = useDispatch()
  const state = useSelector(state => state) 
  const [selected, setSelected] = useState({})
  const [elemms, setElems]=useState([])
  const deleteItem = (index) => {
    dispatch(remove(index))
  }
  const styles ={
    width: "100px",
    height: "20px",
    position: "absolute",
    left: "53%",
    translateX: "-50%",
    marginBottom: "20px"
  }
 
  const selectItem = (index) => {
    setSelected(prevState => {
      const newState = {...prevState}
      newState[index] = !newState[index]
      return newState
    })
   
  }
  
const showSelected=()=> {
  console.log("sel"+JSON.stringify(selected))
  const trueArray=[]
  for (let key in selected) {
    if (selected[key] === true) {
     // console.log(key);
     trueArray.push(key)
    }
  }
  dispatch(select(trueArray))
console.log(trueArray)
} 
  const elems = state.map((item, index) => {
    const selectedStyle = selected[index] ? {backgroundColor: "green"} : {backgroundColor: "yellow"}
    return (
      <div className="item" key={item.id}>
         {index+1}.
        {item.text} 
       
        <button onClick={() => deleteItem(index)}>Delete</button>
        <div className='ittem' style={{...selectedStyle, ...styles}}  onClick={() => selectItem(index)}>Select</div>
      </div>
    )
  })
  
  return (
    <div className="App">
      <h1>To-do list using react-redux technology</h1>
      <Menu />
      <div className="btns">
        <button onClick={()=> showSelected()}>active</button>
        <button>all</button>
      </div>
      {elems}
    </div>
  )
}