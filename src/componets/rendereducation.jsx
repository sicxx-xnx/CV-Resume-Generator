function EducationHolder(props){
const paddingleft = {paddingLeft:"2rem"}
return (
<div className="">
    <div style={{display:'flex',alignItems:'center',gap:".9rem"}}><h3 style={paddingleft}>{props.value.schoolName}</h3><button style={{width:'10%',height:'50%'}} type="button" onClick={()=>{props.setAllSchools(props.array.filter((a)=>{return a.id !== props.value.id}))}}>x</button></div>
    <p style={paddingleft}><i>{props.value.degreeObtained + " " + props.value.typeOfDegree}</i> GPA: {props.value.gpa}</p>
    {!props.value.currentEnrol? <p style={paddingleft}>{props.value.graduationYear + " " + props.value.graduationMonth}</p>:<p style={paddingleft}>Curently Enrolled</p>}
</div>        
    )
}














export function RenderEducation(props){
return(     
<>
<h2>Education</h2>
<div className="border"></div>
{props.array.map((education)=>{
return <EducationHolder value = {education} key = {education.id} setAllSchools = {props.setAllSchools} array = {props.array}/>
})}
</>)
}