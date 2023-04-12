
import "./App.css";
import * as data from "../data.json";
import Back from "./images/bg-header-desktop.svg";
import { ListOfEmployees } from "./listOfEmployees/listOfEmployees";
import List from "./list/list";
import RenderedButtons from "./renderedButtons/renderedButtons";
export default function App() {
  console.log(JSON.stringify(data))
  return (
    <div className="app">
      <img src={Back} className="background" />
<List data={data} />
<RenderedButtons />
    </div>
  );
}
