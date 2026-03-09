import { useState } from 'react'
import './App.css'
import "./resume.css"
import PersonalInfo from './componets/personalinfo.jsx'
import { inputChange } from './helperfunctions/inputChange.js'
import { JobHistory } from './componets/jobhistory.jsx'
import { RenderPersonalInfo } from './componets/renderpersonalinfo.jsx'
import { JobUi } from './componets/renderjobhistory.jsx'
import { EducationInput } from './componets/education.jsx'
import { RenderEducation } from './componets/rendereducation.jsx'

const cssStyles = [
  {borderLeft:"blue .2rem solid",
    

  },
]

function App() {
  const [id,setID] = useState(0)
  const [allJobs,setAllJobs] = useState([])
  const [jobsInfo,setJobsInfo] = useState({jobName:'',companyName:'',startDate:'',endDate:'',desc:''})
  const [values,setValues] = useState({FirstName:'',LastName:'',age:'',email:'',phone:''})
  const [personalInfoResume,setPersonalInfoResume] = useState(false)
  const [allSchools,setAllSchools] = useState([])
  const [educationValues, setEducationValues] = useState({schoolName:"",degreeObtained:'',gpa:'',typeOfDegree:'',graduationMonth:'Jan',graduationYear:"",currentEnrol: false})
  return (
    <main>
      <div className="info-entry-container">
      <section className='personalInfo'>
        <h2>Personal Information</h2>
        <PersonalInfo values = {values} change = {(event)=>inputChange(event,setValues)} submit = {(e)=> {
          e.preventDefault()
          setPersonalInfoResume(true)}}/>
      </section>
      <section className='jobHistory'>
        <JobHistory values = {jobsInfo} change ={(event)=>inputChange(event,setJobsInfo)} 
        render = {setAllJobs} jobsArray = {allJobs} idSet = {()=>{
            setID(id++)
          setJobsInfo((prev)=>{return {...prev,id:id}})}} setJobObj = {setJobsInfo} setAllJobs = {setAllJobs}
        />
      </section>
      <section>
        <EducationInput educationValues={educationValues} change = {(e)=>inputChange(e,setEducationValues)} 
        optionSelect = {(e)=>{console.log(e.target.name);setEducationValues({...educationValues,[e.target.name]:e.target.value})}} 
        changeCurrentEnrol={()=>(setEducationValues({...educationValues,currentEnrol : !educationValues.currentEnrol}))} render = {setAllSchools}
        allSchools = {allSchools} idSet = {()=>{
          setEducationValues((prev)=>{return {...prev,id:crypto.randomUUID()}})}} setEducationObj = {setEducationValues}
        />  
      </section>
      </div>
      <div className="resume">
      <section className='personalInfoResume'>
        {personalInfoResume?<RenderPersonalInfo jobs={allJobs} values = {values}/>:null}
      </section>
        <div style={{display:"flex", paddingLeft:"4rem", gap:".5rem", paddingTop:"1rem"}}>
          <div className="">
            <section>
              {allJobs?<JobUi values = {allJobs} setAllJobs = {setAllJobs}/>:false}
            </section>
            <section>
              {allSchools?<RenderEducation array = {allSchools} setAllSchools={setAllSchools}/>:null }
            </section>
         </div>
        
        <div className="" style={cssStyles[0]} >
          <section>

          </section>
        </div>
      </div>
        </div>
    </main>
  )
}

export default App
