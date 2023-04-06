
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset, add, remove, select, show } from "./store"
import { useState, useRef, useEffect, memo } from 'react'
import "./App.css"

const Menu = memo(() => {
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [value, setValue] = useState('')
  const [fullState, setFullState]=useState({state: []})
  const inputRef = useRef(null)
  console.log("full"+JSON.stringify(fullState))
  return (
    <>
      <input ref={inputRef} type="text" className="addInput" onChange={e => setValue(e.target.value)} />
    
      <button className="add" onClick={() => {
        if(value!=''){
        dispatch(add(value))
        }
        setFullState(prevState => ({
          state: prevState.state.concat(value)
        }));
      }}>add</button>
  <button className='test' onClick={()=> {
        dispatch(show(fullState))
      }}>  show all</button>
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
    left: "58%",
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
  const showAll=()=> {
  }
const showSelected=()=> {
  console.log("sel"+JSON.stringify(selected))
  const trueArray=[]
  for (let key in selected) {
    if (selected[key] === true) {
     trueArray.push(key)
    }
  }
  dispatch(select(trueArray))

} 
console.log("state from app"+JSON.stringify(state))
  const elems = state.map((item, index) => {
    const selectedStyle = selected[index] ? {backgroundColor: "green"} : {backgroundColor: "yellow"}
    return (
      <div className="item" key={item.id}>
         {index+1}.
        {item.text || item} 
       
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
        <button className='active' onClick={()=> showSelected()}>active</button>
       {/*} <button onClick={()=> showAll()}>all</button> */}
      </div>
      {elems}
    </div>
  )
}