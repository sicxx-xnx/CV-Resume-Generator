import { useState } from "react"
import { inputChange } from "../helperfunctions/inputChange"
let count = 0
function Job (props){
    const [visibility, setVisibility] = useState(true)
    return(
      <>
      <h2>Job History</h2>
        <div className="job-title">
            <label htmlFor="title">Job Title*</label>
            <input type="text" name="jobName" id="title" data-id={count} value={props.value.jobName} placeholder="Job Title" required
                onChange={props.change}/>
        </div>
      <div className="dates-there">
        <div className="start-holder">
            <div className="">
                <label htmlFor="startDate"> Start Date*</label>
                <input type="month" name="startDate" id="startDate" value={props.value.startDate} placeholder="Start Date"
                onChange={props.change}/>
            </div>
        <div className="">
            {visibility? <>
            <label htmlFor="endDate"/>End Date<label/>
                <input type="month" name="endDate" id="endDate" value={props.value.endDate} onChange={props.change}/> </>:null}
         <div className="end-date">
            
            <input type="checkbox" name="currentJob" id="currentJob" onChange={
                ()=>{setVisibility(!visibility)}}/>
            <label htmlFor="currentJob">Current Job?</label>
         </div>
        </div>
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