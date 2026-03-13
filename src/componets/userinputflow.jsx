

function userInputFlow(props){
switch (props.userstep) {
    case 1:
        return (<PersonalInfo values = {values} change = {(event)=>inputChange(event,setValues)} submit = {(e)=> {
                  e.preventDefault()
                  setPersonalInfoResume(true)}}/>)
    case 2: 
        return (<JobHistory values = {jobsInfo} change ={(event)=>inputChange(event,setJobsInfo)} 
                    render = {setAllJobs} jobsArray = {allJobs} idSet = {()=>{
                    setID(id++)
                    setJobsInfo((prev)=>{return {...prev,id:id}})}} setJobObj = {setJobsInfo} setAllJobs = {setAllJobs}
                    />
        )
    case 3: 
    return()    

    default:
        break;
}
    

}