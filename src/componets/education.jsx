import { PersonalInfoInput } from "./personalinfo";


export function EducationInput(props){

const Currentyear = new Date().getFullYear()
const EndYear = 1900
const step = 1    
return (
<>
<h2>Educational History</h2>
    <div className="person-info-row">
        <PersonalInfoInput type = {'text'} text = "School Name" name={"schoolName"} value={props.educationValues.schoolName} change = {props.change}/>
         <label htmlFor="degreeObtained">Level of Education
          <select name="degreeObtained" id="" value={props.educationValues.levelOfEducation} required onChange={props.optionSelect}> 
            <option value="Some Highschool">Some Highschool</option>
            <option value="Highschool Degree">Highschool Degree</option>
            <option value="Associate`s Degree">Associate`s Degree</option>
            <option value="Bachelor`s Degree">Bachelor`s Degree</option>
            <option value="Master`s Degree">Master`s Degree</option>
            <option value="Doctorate (PhD)">Doctorate (PhD)</option>
            <option value="Professional Degree (MD, JD, etc.)">Professional Degree (MD, JD, etc.)</option>
            <option value="Trade / Vocational Certification">Trade / Vocational Certification</option>
            <option value="Currently Enrolled">Currently Enrolled</option>
        </select></label>
    </div>    
    <div className="person-info-row">
     <PersonalInfoInput type = {'text'} text = "GPA" name={"gpa"} value={props.educationValues.gpa} change = {props.change}/> 
    <PersonalInfoInput type = {'text'} text = "Type of Degree Obtained" name={"typeOfDegree"} value={props.educationValues.typeOfDegree} change = {props.change}/> 

    </div>
    <div className="person-info-row">
        <label htmlFor="graduationMonth">Graduation Month
          <select name="graduationMonth" id="" disabled={props.educationValues.currentEnrol?true:false} value={props.educationValues.graduationMonth} required onChange={props.optionSelect}> 
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="June">jun</option>
            <option value="July">July</option>
            <option value="Aug">Aug</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Oct">Dec</option>
            </select>
        </label>
        <label htmlFor="graduationYear">Year
          <select name="graduationYear" id="" value={props.educationValues.graduationYear} required disabled={props.educationValues.currentEnrol?true:false} onChange={props.optionSelect}> 
            {Array.from({length: Math.ceil(((Currentyear+1)-EndYear)/step)},
            (_,i)=>  EndYear + i * step,
            ).map((year)=> <option value={year} key={year} required onChange={props.optionSelect} >{year}</option> )}   
            </select>
        </label>
        <label htmlFor="currentEnroll"> Currently Enrolled
            <input type="checkbox" name="currentEnroll" id="" checked={props.educationValues.currentEnrol} onChange={props.changeCurrentEnrol}/>
        </label> 
        
    </div>

    <button type="submit" onClick={(e)=>{
        e.preventDefault()
        props.idSet()
        props.render([...props.allSchools,props.educationValues])
    }}>Add New School</button>
</>
)    
}