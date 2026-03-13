function SummaryComponent(props){
return (
<>
<h2>Summary</h2>
<p>{props.summaryValue}</p>
</>    
)    
}


export function RenderSummary(props){
return (    
<SummaryComponent summaryValue = {props.summaryValue}/>
)
}