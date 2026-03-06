
export function PersonalInfoInput(props){
return(
<div className="input-label-cont"><label htmlFor={props.name}> {props.text} </label>
<input type={props.type} name={props.name} id={props.name} placeholder = {props.text} value={props.value} onChange={props.change} required/>  
</div>
)    
}

export default function PersonalInfo(props){

return(
<>
<div className="person-info-row"><PersonalInfoInput type = "text" name = "FirstName" value ={props.values.FirstName} change={props.change} text={'First Name'}/>
<PersonalInfoInput type = "text" name = "LastName" value ={props.values.LastName} change={props.change} text = {'Last Name'}
/></div>
<div className="person-info-row"><PersonalInfoInput type = "number" name = "age" value ={props.values.age} change={props.change} text={'Age'} />
</div>
<div className="person-info-row"><PersonalInfoInput type = "email" name = "email" value={props.values.email} change={props.change} text={'Email'} />
<PersonalInfoInput type = "text" name = "phone" value={props.values.phone} change={props.change} text={'Phone'}  /></div>
<button type="click" onClick={props.submit}>Submit Personal Info</button>
</>    
)    
}