
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, add, remove } from "./store"
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
  const deleteItem = (index) => {
   dispatch(remove(index))
  }
  
  const elems = state.map((item, index) => {
    return (
      <div className="item" key={item.id}>
         {index+1}.
        {item.text} 
       
        <button onClick={() => deleteItem(index)}>Delete</button>
      </div>
    )
  })
  
  return (
    <div className="App">
      <h1>To-do list using react-redux technology</h1>
      <Menu />
      {elems}
    </div>
  )
}