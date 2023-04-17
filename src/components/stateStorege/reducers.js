export const todoReducer = (state = [], action) => {
    switch (action.type) {
      case "SHOW": {
        state.push(action.todoArrayy);
        return state;
      }
      case "SHOWARRAY": {
        state = [...state, action.language];
        state = state.filter((item, index) => {
          return state.indexOf(item) === index;
        });
        return state;
      }
      case "DEL": {
        return state.filter(item => item !== action.skill);
      }
      case "MAINARRAY": {
      }
      default: {
        return state;
      }
    }
  };
  
 export  const positionReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD": {
        console.log("leng"+action.leng)
        const max=action.leng-2
        if(Object.values(action.data).length>max){
          state=Object.values(action.data).slice(0, -2);
        }
        else{
        state=Object.values(action.data).slice(0, -2);
        }
      const remEl=action.removedSkill
     const neww=action.removedSkill
     neww.push(action.language)
    
       const searchLanguagess=neww
        const searchLanguages = searchLanguagess.filter((item, index) => {
          return searchLanguagess.indexOf(item) === index;
        }); 
        const result = state.filter(item => {
          return searchLanguages.every(language => {
            if (item.languages) {
              return item.languages.indexOf(language) !== -1;
            } else {
              return false;
            }
          });
        });
        state=result
        return state
  
  
      }
      case "DELL": {
        state=Object.values(action.data)
        const searchLanguages=action.removedSkill
        const result = state.filter(item => {
          return searchLanguages.every(language => {
            if (item.languages) {
              return item.languages.indexOf(language) !== -1;
            } else {
              return false;
            }
          });
        }); 
     state=action.removedSkill
     state=result
        return state
        }
      default: {
        return state;
      }
    }
  }
  export const pos=(state=[], action)=> {
    switch(action.type){
      case "tt": {
        state.push(action.language)
      }
      default: {
        return state
      }
    }
  }
 export  const rem=(state=[], action)=> {
    switch(action.type){
      case "tt": {
        state.push(action.language)
      }
      default: {
        return state
      }
    }
  }
 export  const addLang = (state = [], action) => {
    switch(action.type){
   case"ADDLANG": {
      state.push(action.language)
    
    }
    default:{
    return state
    }
  } 
  }
  export const removedArr =(state=[], action) => {
    switch(action.type){
      case "DELLL":{
  console.log("rr r"+action.removedSkill)
      }
      default:{
        return state
      }
    }
  }