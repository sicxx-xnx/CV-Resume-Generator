function JobUi(props){
return (
    <><h2>Professional Experience</h2>
    <ul>
        {props.values.map(
            (job)=>(
                <li className="jobList" style={{listStyle:"none"}} key={job.jobName}>
                    <div className="job">
                        <div className="jobTitleDiv"><h2>{job.jobName}</h2><button type="button" onClick={()=>{props.setAllJobs(props.values.filter((a)=>{return a.id !== job.id}))}}>x</button></div>
                        <div className="" style={{display:"flex",marginTop:"-1rem", gap:"1rem", alignItems:"center"}}><h3>{job.companyName}</h3><p><i>{job.startDate} / {job.endDate?job.endDate:"Current job"}</i></p></div>
                        <div className="" style={{marginTop:"-1rem"}}><p className="job-desc">{job.desc}</p></div>
                    </div>
                </li>
            )
        )}
    </ul>
    <div className="" style={{height:".2rem", backgroundColor:"blue" }}></div>
    </>
)    
}

export {JobUi}