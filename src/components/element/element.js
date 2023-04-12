import "./element.css"
import StyledFeatured from "../styledFeatured/styledFeatured"
import StyledBtns from "../styledBtns/styledBtns"
import { useEffect } from "react"
import StyledNew from "../styledNew/styledNew"
//import Log from "./images/account.svg"
//import Back from "./images/bg-header-desktop.svg";
const Element =(props)=> {
    const {id, logo, position, company, location, contract, postedAt, featured, neww, role, languages} =props
  const lang=languages
  const {anime, onSelectedAnime, onSelectedItems} =props
return  (
    <div className="item"> 
  {/*   <img src={Back} alt="logo" className="itemImage" /> */}
<h3 className="position">{position} </h3>
<div className="company">{company} </div>
<div className="postedAt">{postedAt} </div>
<div className="languages">{languages ? <StyledBtns onSelectedItems={onSelectedItems} position={position} company={company} onSelectedAnime={onSelectedAnime} languages={languages} /> : console.log("no")} </div>
<div className="new">{neww ? <StyledNew /> : null }</div> 
<div className="new">{featured ? <StyledFeatured /> : null }</div> 
    </div>
)
}
export default Element 