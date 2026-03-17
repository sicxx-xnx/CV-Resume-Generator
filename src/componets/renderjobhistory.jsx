function JobUi(props){
return (
    <>
    <h2></h2>
          <div style={{display:'flex',
                       gap:'10px',
                       justifyContent:'space-between',
                       alignItems:'center'}}>  
                <h2>Professional Experience</h2> 
                <button style={{height:"50%",width:"unset"}} onClick={props.edit}>Edit</button>
        </div>
    <ul>
        {props.values.map(
            (job)=>(
                <li className="jobList" style={{listStyle:"none"}} key={job.jobName}>
                    <div className="job">
                        <div className="jobTitleDiv"><h3>{job.jobName}</h3><button type="button" onClick={()=>{props.setAllJobs(props.values.filter((a)=>{return a.id !== job.id}))}}>x</button></div>
                        <div className="" style={{display:"flex",marginTop:"-1rem", gap:"1rem", alignItems:"center"}}><h3>{job.companyName}</h3><p><i>{job.startDate} / {job.endDate?job.endDate:"Current job"}</i></p></div>
                        <div className="" style={{marginTop:"-1rem", maxWidth:'19rem'}}><p className="job-desc">{job.desc}</p></div>
                    </div>
                </li>
            )
        )}
    </ul>
    <div className="divbordersection" style={{height:".2rem", backgroundColor:"blue" }}></div>
    </>
)    
}

export {JobUi}