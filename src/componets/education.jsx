import { ChangePopupdisplay } from "../helperfunctions/popup";
import { PersonalInfoInput } from "./personalinfo";


export function EducationInput(props){
const degrees = [  
"Some Highschool",
  "Highschool Degree",
  "Associate`s Degree",
  "Bachelor`s Degree",
  "Master`s Degree",
  "Doctorate (PhD)",
  "Professional Degree (MD, JD, etc.)",
  "Trade / Vocational Certification",
  "Currently Enrolled"
]    
const months = [
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul",
"Aug",
"Oct",
"Nov",
"Dec"    
] 

const Currentyear = new Date().getFullYear()
const EndYear = 1900
const step = 1    
return (
<>
<form action="" onSubmit={(e)=>{
        e.preventDefault()
        ChangePopupdisplay(props.changePopupVisibility,props.changePopupText,"School Experience added",props.setPopupClass)
        const newEducationObj = {
        ...props.educationValues,
        id: crypto.randomUUID()    
        }
        props.setEducationObj(newEducationObj)
        props.render([...props.allSchools,newEducationObj])
    }}>
<h2>Educational History</h2>
    <div className="person-info-row">
        <PersonalInfoInput type = {'text'} text = "School Name" name={"schoolName"} value ={props.educationValues?.schoolName }  change = {props.change}/>
         <label htmlFor="degreeObtained">Level of Education*
          <select name="degreeObtained" id="" value={props.educationValues?.degreeObtained} required onChange={props.optionSelect}> 
            {degrees.map((degree)=><option value={degree}key={degree}>{degree}</option> )}
        </select></label>
    </div>    
    <div className="person-info-row">
     <PersonalInfoInput type = {'text'} text = "GPA" name={"gpa"} value={props.educationValues?.gpa} pattern={"^(?:[0-3](?:\\.[0-9]{1,2})?|4(?:\\.0{1,2})?)$"} invalid = {(e)=>{e.target.setCustomValidity("Invalid GPA Score")}}change = {props.change}/> 
    <PersonalInfoInput type = {'text'} text = "Type of Degree Obtained" name={"typeOfDegree"} value={props.educationValues?.typeOfDegree} change = {props.change}/> 

    </div>
    <div className="person-info-row">
     <label htmlFor="graduationMonth">{props.educationValues?.currentEnrol?"Graduation Month":"Graduation Month*"}
          <select name="graduationMonth" id="" disabled={props.educationValues?.currentEnrol?true:false} value={props.educationValues?.graduationMonth} required onChange={props.optionSelect}> 
            {months.map((month)=><option value={month}key={month}>{month}</option> )}

            </select>
        </label>
        <label htmlFor="graduationYear">{props.educationValues?.currentEnrol?"Year":"Year*"}
          <select name="graduationYear" id="" value={props.educationValues?.graduationYear} required disabled={props.educationValues?.currentEnrol?true:false} onChange={props.optionSelect}> 
            {Array.from({length: Math.ceil(((Currentyear+1)-EndYear)/step)},
            (_,i)=>  EndYear + i * step,
            ).map((year)=> <option value={year} key={year} required onChange={props.optionSelect} >{year}</option> )}   
            </select>
        </label>
        <label htmlFor="currentEnroll"> Currently Enrolled
            <input type="checkbox" name="currentEnroll" id="" checked={props.educationValues?.currentEnrol} onChange={props.changeCurrentEnrol}/>
        </label> 
        
    </div>
    <button type="submit" className="jobButton">Add New School</button>
    <div className="userflowButton"><button type="button" onClick={props.userFlowPreviousStep}>Previous Section</button>
    <button type="button" onClick = {props.userFlowNextStep}>Next Section</button></div>  
 
    </form>
</>
)    
}