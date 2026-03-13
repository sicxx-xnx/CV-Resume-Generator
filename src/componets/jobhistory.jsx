import { useState } from "react"
import { renderToPipeableStream } from "react-dom/server"

let count = 0
function Job (props){
    const [visibility, setVisibility] = useState(true)
    return(
    <>
    <form action="" onSubmit={(e)=>{
            e.preventDefault()
            const newJobObject = {
               ...props.value,
               id:crypto.randomUUID()
            }
            props.setJobObj(newJobObject)
            props.render([...props.jobsArray, newJobObject])}}>
        <h2>Job History</h2>
        <div className="person-info-row ">
            <div>
                <label htmlFor="title">Job Title*</label>
                <input type="text" name="jobName" id="title" required data-id={count} value={props.value.jobName} placeholder="Job Title"
                    onChange={props.change}/>
            </div>

            <div>
                <label htmlFor="company">Company*</label>
                <input type="text" name="companyName" id="company" required value={props.value.companyName} placeholder="Company Name"
                onChange={props.change} />
            </div>  
        </div>
        <div className="dates-there person-info-row">
            <div className="start-holder">
                <div className="start-date-holder">
                    <label htmlFor="startDate"> Start Date*</label>
                    <input type="month" name="startDate" required id="startDate" value={props.value.startDate} placeholder="Start Date"
                        onChange={props.change}/>
                </div>
                <div className="enddateinfoholder">
                    {visibility? <>
                        <label htmlFor="endDate"/>End Date<label/>
                        <input type="month" required name="endDate" min={props.value.startDate} id="endDate" value={props.value.endDate} onChange={props.change}/> </>:null}
                <div className="end-date" style={!visibility?{minHeight: "100%"}:null}>
            
                    <input type="checkbox" name="currentJob" id="currentJob" onChange={
                        ()=>{setVisibility(!visibility)}}/>
                    <label htmlFor="currentJob">Current Job?</label>
                </div>
                </div>
         </div>



        </div>
        <div className="jobDesc">
            <label htmlFor="desc">Position Overview </label>
            <textarea name="desc" id="desc" cols="30" rows="10" required value={props.value.desc} onChange={props.change}></textarea>
        </div>
       <div><button type="button" onClick={props.userFlowPreviousStep}>Previous Section</button><button type="submit" className="jobButton">Add Professional Experience</button><button type="button" onClick = {props.userFlowNextStep}>Next Section</button></div> 
        <div className="sectionBorder"></div>
        </form>
    </>
    )
}



function JobHistory(props){

return (
<Job value = {props.values} userFlowPreviousStep = {props.userFlowPreviousStep} userFlowNextStep={props.userFlowNextStep} change = {props.change} render = {props.render} setJobObj = {props.setJobObj} jobsArray = {props.jobsArray} idSet={props.idSet} />
)    
}

export {JobHistory}