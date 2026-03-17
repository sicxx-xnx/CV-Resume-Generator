export function RenderLinks(props){
const linktypes = []    
for (const key in props.links) {
if (props.links[key]) {
linktypes.push(<li key={key + "render"}><div><i className={key}></i><p>{props.links[key]}</p></div></li>)      
}    
}    
return (
<>
          <div style={{display:'flex',
                       gap:'10px',
                       justifyContent:'space-between',
                       alignItems:'center'}}>  
                <h2>Links</h2>
                <button style={{height:"50%",width:"unset"}} onClick={props.edit}>Edit</button>
            </div>

<ul>
 {linktypes}   
</ul>  
</>
)    
}