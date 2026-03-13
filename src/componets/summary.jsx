export function Summary(props){
    return (
        <>
        <h2>Summary</h2>
        <label htmlFor="summary">
            <textarea name="summary" id="summary" rows="10" onChange={props.change} value={props.summary}></textarea>
        </label>
        <div>
            <button type="button" onClick={props.userFlowPreviousStep}>Previous Section</button>
            <button style = {{marginTop:"1rem"}} type="button" onClick={props.showSummary}>Submit</button>
            <button type="button" onClick = {props.userFlowNextStep}>Next Section</button>
        </div>          
        <div className="sectionBorder"></div>
        </>
    )
}