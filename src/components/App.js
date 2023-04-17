
import "./App.css";
import * as data from "../data.json";
import Back from "./images/bg-header-desktop.svg";
import { ListOfEmployees } from "./listOfEmployees/listOfEmployees";
import List from "./list/list";
import RenderedButtons from "./renderedButtons/renderedButtons";
import { useSelector } from "react-redux";
import { rootReducer } from "../store";
import { store } from "../store";
import { useState } from "react";
export default function App() {
  const allElements = Object.values(data);
const langElements = allElements.slice(0, -2).map(obj => {
  return obj.languages 
});
  return  (
    <div className="app">
      <img src={Back} className="background" />
<List langElements={langElements} data={data} />
<RenderedButtons />

    </div>
  );
}
