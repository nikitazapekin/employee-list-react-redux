
  import React, { useState, useMemo, useEffect } from "react";
import Element from "../element/element";
import "./list.css";
import { useSelector, useDispatch } from "react-redux";
import { showArray, del } from "../../store";
import { store } from "../../store";
const List = React.memo((props) => {
  const { data, langElements } = props;
  const [anime, setAnime] = useState(0);
  const [langg, setLangg] = useState([]);
  const [works, setWorks] = useState([]);
  const [removedSkill, setRemovedSkill] =useState([])
  const onSelectedAnime = (newElement) => {
    setAnime(newElement);
  };
  const onSelectedLang = (newElement) => {
    setLangg(newElement);
  };
  const dispatch = useDispatch();
  const [skills, setSkills] = useState([]);
  const state = useSelector((state) => state);
  const onSelectedItems = (newElement) => {
    setSkills((prevSkills) => [...prevSkills, newElement]);
  };
  const elll = state.todos;
  const ell = elll.map((skill, index) => {
    return (
      <div className="skillBtn">
        {skill}
        <button
          className="deleteSkill"
          onClick={() => {
            store.dispatch({ type: "DEL", skill: skill });
          const langs=state.todos
     setRemovedSkill(prev=>{
      const removedSkill =langs.filter(item=> item!=skill)
      const ttElem=removedSkill
      store.dispatch({ type: "DELL", langs:langs, skill: skill, langg:langg, removedSkill:removedSkill,  data: data });
      store.dispatch({ type: "DELLL", langs:langs, skill: skill, langg:langg, removedSkill:removedSkill,  data: data });
      return removedSkill
     })
          }}
        >
          <span className="deleteStick"> </span>
          <span className="deleteStick"></span>
        </button>
      </div>
    );
  });
const leng =Object.values(data).length
  useEffect(() => {
    if (state.positions === null || state.positions.length === 0) {
      setWorks(Object.values(data).slice(0, -2));
    } else {
      let newWorks = state.positions;
      if (newWorks.length === Object.values(data).length) {
        newWorks = newWorks.slice(0, -2);
      }
      setWorks(newWorks);
    }
  }, [data, state.positions]);

  const allElements = Object.values(data).slice(0, -2);
 
  const elements = useMemo(() => {
    return works.map((obj) => (
      <Element
      leng={leng}
        langElements={langElements}
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
        data={data}
        onSelectedLang={onSelectedLang}
        langg={langg}
        removedSkill={removedSkill}
      />
    ));
  }, [langElements, onSelectedAnime, onSelectedItems, data, onSelectedLang, langg]);
  return (
    <div>
    
      {anime != 0 ? <div className="activeBar">{ell}</div> : null}
      {elements}
    </div>
  );
});

export default List;