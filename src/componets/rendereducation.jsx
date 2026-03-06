function EducationHolder(props){
return (
<div className="">
    <h3>{props.value.schoolName}</h3>
    <p><i>{props.value.degreeObtained + " " + props.value.typeOfDegree}</i> GPA: {props.value.gpa}</p>
    {!props.value.currentEnroll? <p>{props.value.graduationYear + " " + props.value.graduationMonth}</p>:<p>Curently Enrolled</p>}
</div>        
    )
}














export function RenderEducation(props){
return(     
<>
<h2>Education</h2>
<div className="border"></div>
{props.array.map((education)=>{
return <EducationHolder value = {education} key = {education.schoolId}/>
})}
</>)
}