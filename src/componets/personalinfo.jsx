
export function PersonalInfoInput(props){
return(
<div className="input-label-cont"><label htmlFor={props.name}> {props.text} </label>
<input type={props.type} name={props.name} id={props.name} placeholder = {props.text} value={props.value} onChange={props.change} autoComplete= {props.auto} pattern={props.pattern} onInvalid={props.invalid} onInput={(e)=>{e.target.setCustomValidity("")}}

required/>  
</div>
)    
}

export default function PersonalInfo(props){

return(
<form action="" onSubmit={props.submit}>    
<div className="person-info-row"><PersonalInfoInput type = "text" name = "FirstName" value ={props.values.FirstName} change={props.change} text={'First Name*'}/>
<PersonalInfoInput type = "text" name = "LastName" value ={props.values.LastName} change={props.change} text = {'Last Name*'}
/></div>
<div className="person-info-row"><PersonalInfoInput type = "number" name = "age" value ={props.values.age} change={props.change} text={'Age*'} />
</div>
<div className="person-info-row"><PersonalInfoInput type = "email" name = "email" value={props.values.email} change={props.change} text={'Email*'} />
<PersonalInfoInput type = "tel" name = "phone" auto={"phone"} value={props.values.phone} change={props.change} text={'Phone*'} invalid = {(e)=>{e.target.setCustomValidity("Invalid phone number")}}
pattern="^(\+?[0-9]{1,2} ?)?[0-9]{3}[ .\-]?[0-9]{3}[ .\-]?[0-9]{4}$"
 /></div>
<button type="submit" className="personalButton">Submit Personal Info</button>
<div className="sectionBorder"></div>
</form>    
)    
}