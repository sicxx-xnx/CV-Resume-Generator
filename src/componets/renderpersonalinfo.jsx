function RenderPersonalInfo(props){
    return(
    <div className="">
        <h2>{props.values.FirstName + " " + props.values.LastName}</h2>
        <div className="">
            <p>{props.values.age}</p>
            <p>{props.values.email}</p>
            <p>{props.values.phone}</p>
        </div>
        
    </div>
    )
}

export {RenderPersonalInfo}