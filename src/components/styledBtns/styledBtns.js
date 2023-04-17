import { useSelector, useDispatch } from "react-redux";
import "./styledBtns.css";
import { useState } from "react";

function StyledBtns(props) {
  const { data, langElements, onSelectedLang, leng } = props;
  const [arr, setArr] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const {
    langg,
    removedSkill,
    ll,
    languages,
    onSelectedAnime,
    company,
    position,
    onSelectedItems,
  } = props;
  const [remSkill, setRemSkill] = useState(removedSkill);
  const removedSkillLanguages = state.removedArr;
  const test = () => {
    onSelectedAnime && onSelectedAnime((prev) => prev + 1);
  };

  const btnElements = languages.map((language, index) => (
    <div
      onClick={() => {
        test();

        dispatch({ type: "tt", language: language });
        const ttElem = state.pos;
        onSelectedLang && onSelectedLang((prev) => [...prev, language]);
        dispatch({
          type: "ADD",
          leng: leng,
          langElements: langElements,
          removedSkill: removedSkill,
          ttElem: ttElem,
          ll: ll,
          language: language,
          data: data,
          arr: arr,
        });
        dispatch({
          type: "SHOWARRAY",
          language: language,
          langElements: langElements,
          langg: langg,
        });
        onSelectedItems && onSelectedItems(language);
      }}
      key={language}
      className="styledBtn"
    >
      {language}
    </div>
  ));

  return (
    <div className="styleBtn">
      {btnElements}
    
    </div>
  );
}

export default StyledBtns;
