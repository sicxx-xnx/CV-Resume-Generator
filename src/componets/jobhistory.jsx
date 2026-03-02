import { useState } from "react"
import { renderToPipeableStream } from "react-dom/server"

let count = 0
function Job (props){
    const [visibility, setVisibility] = useState(true)
    return(
    <>
        <h2>Job History</h2>
        <div className="job-title person-info-row ">
            <label htmlFor="title">Job Title*</label>
            <input type="text" name="jobName" id="title" data-id={count} value={props.value.jobName} placeholder="Job Title" required
                onChange={props.change}/>
        </div>
        <div className="dates-there person-info-row">
            <div className="start-holder">
                <div className="start-date-holder">
                    <label htmlFor="startDate"> Start Date*</label>
                    <input type="month" name="startDate" id="startDate" value={props.value.startDate} placeholder="Start Date"
                        onChange={props.change}/>
                </div>
                <div className="enddateinfoholder">
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
        <div className="jobDesc person-info-row">
            <label htmlFor="desc">Position Overview </label>
            <textarea name="desc" id="desc" cols="30" rows="10" value={props.value.desc} onChange={props.change}></textarea>
        </div>
        <button type="button" onClick={(e)=>{
            e.preventDefault()
            props.idSet()
            console.log(props.jobsArray)
            props.render([...props.jobsArray, props.value])
        }}>Add Professional Experience</button>
    </>
    )
}



function JobHistory(props){

return (
<Job value = {props.values} change = {props.change} render = {props.render} jobsArray = {props.jobsArray} idSet={props.idSet} />
)    
}

export {JobHistory}