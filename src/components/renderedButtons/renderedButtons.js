
import { useSelector } from 'react-redux';

function RenderedButtons() {
  const state = useSelector(state => state);

  const elems = state.map((elem, index) => {
    return <div key={index}>{elem}</div>
  });

  return (
    <div className="renderedButtons">

      <button onClick={()=> console.log(state)}>f show</button>
      {elems}

    </div>
  );
}

export default RenderedButtons;