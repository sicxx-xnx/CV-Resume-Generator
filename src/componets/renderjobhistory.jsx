function JobUi(props){
return (
    <ul>
        {props.values.map(
            (job)=>(
                <li key={job.jobName}>
                    <div className="job">
                        <div className=""><h2>{job.jobName}</h2><button type="button" onClick={()=>{props.setAllJobs(props.values.filter((a)=>{a.id !== job.id}))}}>x</button></div>
                        <h3>{job.companyName}</h3>
                        <div className="border"></div>
                        <div className=""><p><i>{job.startDate} to {job.endDate?job.endDate:"Current job"}</i></p></div>
                        <div className=""><p className="job-desc">{job.desc}</p></div>
                    </div>
                </li>
            )
        )}
    </ul>
)    
}

export {JobUi}