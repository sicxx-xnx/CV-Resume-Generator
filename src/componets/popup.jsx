export function RenderPopup (props){
return (
  <section className={props.class} style={{backgroundColor:'#32cd32', textAlign:'center',position:'fixed', width:'60%'}}>
    <p>{props.text}</p>
   </section> 
)    
}