

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { show } from '../../store';
import { showArray } from '../../store';
import "./styledBtns.css";

function StyledBtns(props){ 
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const { languages, onSelectedAnime, company, position, onSelectedItems} = props;
  const test = () => {
    onSelectedAnime && onSelectedAnime(prev=> prev+1);
  };

  const btnElements = languages.map((language, index) => (
    <div
     
      onClick={() => {
        test();
        dispatch(showArray(language));
       // dispatch(show(position));
        onSelectedItems && onSelectedItems(language);
      }}
      key={language}
      className="styledBtn"
    >
      {language}
    </div>
  ));
 
  /*function StyledBtns(props){ 
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { languages, onSelectedAnime, company, position, onSelectedItems, onSelectedLanguage} = props;
    const test = () => {
      onSelectedAnime && onSelectedAnime(prev=> prev+1);
    };
  
    const btnElements = languages.map((language, index) => (
      <div
        onClick={() => {
          test();
          dispatch(show(position));
          onSelectedItems && onSelectedItems(language);
          onSelectedLanguage && onSelectedLanguage(language);
        }}
        key={language}
        className="styledBtn"
      >
        {language}
      </div>
    ));
  */
  
  return (
    <div className="styleBtn">
      {btnElements} 
    </div>
  );
}

export default StyledBtns;