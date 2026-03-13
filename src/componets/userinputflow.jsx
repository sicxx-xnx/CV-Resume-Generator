import { EducationInput } from "./education"
import { JobHistory } from "./jobhistory"
import { Link } from "./linksinput"
import PersonalInfo from "./personalinfo"
import { SkillInput } from "./skills"
import { Summary } from "./summary"
import { inputChange } from "../helperfunctions/inputChange"


export function UserInputFlow(props){
switch (props.userFlow) {
    case 1:
    return (<PersonalInfo values = {props.userInputValues} change = {(event)=>inputChange(event,props.setUserValues)} submit = {props.submitUser}/>)
    case 2: 
    return (<JobHistory values = {props.jobValues} change ={props.changeJobValues} userFlowNextStep = {props.userFlowNextStep} userFlowPreviousStep = {props.userFlowPreviousStep}
                    render = {props.renderJobs} jobsArray = {props.jobsArray} idSet = {props.jobIdSet} setJobObj = {props.setJobObj} setAllJobs = {props.setAllJobs}
                    />
        )
    case 3: 
    return(<EducationInput educationValues={props.educationValues} change = {props.changeEducationValues} 
            optionSelect = {(e)=>{console.log(e.target.name);props.setEducationObj({...props.educationValues,[e.target.name]:e.target.value})}} 
            changeCurrentEnrol={()=>(props.setEducationObj({...props.educationValues,currentEnrol : !props.educationValues.currentEnrol}))} render = {props.educationRender}
            allSchools = {props.allSchools} idSet = {props.EducationIdSet} setEducationObj = {props.setEducationObj} userFlowNextStep = {props.userFlowNextStep} userFlowPreviousStep = {props.userFlowPreviousStep}
            />  )  
    case 4:
        return( <Link links = {props.links} change = {props.changeLink}/>
        ) 
    case 5: 
        return (
            <Summary summary = {summary} change = {
                    (e) => {setSummary(e.target.value)}} showSummary = {()=>{setSummaryVisibility(()=>{return true})}} />
        )         
    case 6: 
        return ( <SkillInput skill = {skill} changeSkill = {(e)=>{setSkill((prev)=>({...prev, value:e.target.value}))}} addSkill = {(e)=>{
              e.preventDefault()  
              const newObj = {
               ...skill,
               id: crypto.randomUUID() 
              }
              setAllSkills((prev)=>[...prev, newObj])
              setSkill({value:""})
            }
        
            } 
              
              />
        )    
    default:
        break;
}
    

}