
const liststyle = {margin:'0 1rem 2rem 0'}
function LinkInput(props){
    return(
        <div className="">
            <label htmlFor={props.name}> {props.name}

                <input type="text" style={liststyle} name ={props.name} value={props.value} onChange={props.change}/>
            </label>
        </div>
    )
}

export function Link(props){
const linktypes = []
for (const key in props.links) {
    
    linktypes.push(<li key={key}>< LinkInput  name = {[key]} value={props.links[key]} change={props.change}/></li>)   
}    
return (
<><h2>Links</h2>    
<ul style={{display:"flex",flexWrap:"wrap", listStyle:"none",paddingInlineStart:'inherit'}}>{linktypes}</ul>
<div className="sectionBorder"></div></>   
)    
}