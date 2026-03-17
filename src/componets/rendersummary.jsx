function SummaryComponent(props){
return (
<>
<div style={{display:"flex",gap:'10px',alignItems:'anchor-center'}}><h2 style={{paddingLeft:'.5rem'}}> Professional Summary</h2> <button style={{height:"50%",width:"unset"}} onClick={props.edit}>Edit</button></div>

<p style={{paddingLeft:'1rem'}}>{props.summaryValue}</p>
<div className="divbordersection" style={{height:".2rem", backgroundColor:"blue" }}></div>
</>    
)    
}


export function RenderSummary(props){
return (    
<SummaryComponent edit = {props.edit} summaryValue = {props.summaryValue}/>
)
}