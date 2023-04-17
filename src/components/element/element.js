import "./element.css"
import StyledFeatured from "../styledFeatured/styledFeatured"
import StyledBtns from "../styledBtns/styledBtns"
import { useEffect } from "react"
import StyledNew from "../styledNew/styledNew"
const Element =(props)=> {
    const {id,removedSkill,leng,  langg, ll, logo, position, company, location, contract, postedAt, featured, neww, role, languages, data, langElements, onSelectedLang} =props
  const lang=languages
  const {anime, onSelectedAnime, onSelectedItems} =props
return  (
    <div className="item"> 
    <img src={logo} alt="logo" className="itemImage" />
<h3 className="position">{position} </h3>
<div className="company">{company} </div>
<div className="postedAt">{postedAt} </div>
<div className="languages">{languages ? <StyledBtns ll={ll} leng={leng} removedSkill={removedSkill} langg={langg} onSelectedLang={onSelectedLang} langElements={langElements} data={data} onSelectedItems={onSelectedItems} position={position} company={company} onSelectedAnime={onSelectedAnime} languages={languages} /> : console.log("no")} </div> 
<div className="new">{neww ? <StyledNew /> : null }</div> 
<div className="new">{featured ? <StyledFeatured /> : null }</div> 
    </div>
)
}
export default Element 