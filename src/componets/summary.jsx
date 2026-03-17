export function Summary(props){
    return (
        <>
        <h2> Professional Summary</h2>
        <label htmlFor="summary">
            <textarea name="summary" id="summary" rows="10" onChange={props.change} value={props.summary}></textarea>
        </label>
        <div>

            <button style = {{marginTop:"1rem"}} type="button" onClick={props.showSummary}>Submit</button>
                   <div className="userflowButton"><button type="button" onClick={props.userFlowPreviousStep}>Previous Section</button>
    <button type="button" onClick = {props.userFlowNextStep}>Next Section</button></div> 

        </div>          
        </>
    )
}