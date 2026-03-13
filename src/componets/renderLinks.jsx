export function RenderLinks(props){
const linktypes = []    
for (const key in props.links) {
if (props.links[key]) {
linktypes.push(<li key={key + "render"}><div><i className={key}></i><p>{props.links[key]}</p></div></li>)      
}    
}    
return (
<ul>
 {linktypes}   
</ul>   
)    
}