function RenderPersonalInfo(props){
    return(
  <> <div className="" style={{lineHeight:"0.7rem",alignSelf:"flex-start"}}>
        <h2>{props.values.FirstName + " " + props.values.LastName}</h2>
        <p>{props.jobs[0]?.jobName}</p>
    </div>
        <div className="" style={{display:"flex", justifyContent:"space-between",marginTop:"-0.9rem" }}>
            <p style={{display:"flex", alignItems:"center", gap: ".5rem"}}><i className="phone"></i>{" " + props.values.phone} </p>
            <p>{props.values.age}</p>
            <p>{props.values.email}</p>
            
        </div>
        </> 
    
    )
}

export {RenderPersonalInfo}