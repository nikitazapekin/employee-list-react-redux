
import Element from "../element/element";
import "./list.css";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { showArray } from "../../store";
import { del } from "../../store";
const List = (props) => {
  const { data } = props;
  const [anime, setAnime] = useState(0);
  const onSelectedAnime = (newElement) => {
    setAnime(newElement);
  };
  const dispatch = useDispatch();
  const [skills, setSkills] = useState([]);
  const state = useSelector(state => state);
const onSelectedItems = (newElement) => {
  setSkills((prevSkills) => [...prevSkills, newElement]);
};
//dispatch(showArray(skills));

  const ell=state.map((skill,index)=> {
    return <div className="skillBtn"> {skill} 
    <button className="deleteSkill" onClick={()=> {
dispatch(del(skill))
    }}>
      <span className="deleteStick"> </span>
      <span className="deleteStick"></span>
    </button>
    </div>
  })
 // const state = useSelector(state => state);
 // const dispatch = useDispatch();
  const allElements = Object.values(data);
  const elements = allElements.slice(0, -2).map(obj => (
    <Element
      onSelectedAnime={onSelectedAnime}
      onSelectedItems={onSelectedItems}
      key={obj.id}
      location={obj.location}
      contract={obj.contract}
      postedAt={obj.postedAt}
      logo={obj.logo}
      featured={obj.featured}
      id={obj.id}
      neww={obj.new}
      company={obj.company}
      position={obj.position}
      role={obj.role}
      languages={obj.languages}
    />
  ));
  
  return (
    <div>
     
      <button onClick={()=> {
        console.log("array"+JSON.stringify({skills}))
      }}>show skills</button>
      { anime!=0 ? <div  className="activeBar">{ell}</div> : null }
      {elements}
    </div>
  );
};

export default List; 
