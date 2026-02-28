import { useState } from "react"
import { inputChange } from "../helperfunctions/inputChange"
let count = 0
function Job (props){
    const [visibility, setVisibility] = useState(true)
    return(
      <>
      <h2>Job History</h2>
        <div className="job-title">
            <label htmlFor="title">Job Title</label>
            <input type="text" name="jobName" id="title" data-id={count} value={props.value.jobName}
                onChange={props.change}/>
        </div>
      <div className="dates-there">
        <label htmlFor="startDate"> Start Date</label>
            <input type="month" name="startDate" id="startDate" />
        <label htmlFor="currentJob">Current Job?</label>
            <input type="checkbox" name="currentJob" id="currentJob" onChange={
            ()=>{setVisibility(!visibility)}}/> 
        <div className="">{visibility? <>
            <label htmlFor="endDate"/>End Date<label/>
                <input type="month" name="endDate" id="endDate"/></>:null}
        </div> 
       </div>


 
       
</>
    )
}



function JobHistory(props){

return (
<Job value = {props.values} change = {props.change}  />
)    
}

export {JobHistory}