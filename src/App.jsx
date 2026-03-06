import { useState } from 'react'
import './App.css'
import PersonalInfo from './componets/personalinfo.jsx'
import { inputChange } from './helperfunctions/inputChange.js'
import { JobHistory } from './componets/jobhistory.jsx'
import { RenderPersonalInfo } from './componets/renderpersonalinfo.jsx'
import { JobUi } from './componets/renderjobhistory.jsx'
import { EducationInput } from './componets/education.jsx'
import { RenderEducation } from './componets/rendereducation.jsx'

function App() {
  let id = 0
  let schoolID = 0
  const [allJobs,setAllJobs] = useState([])
  const [jobsInfo,setJobsInfo] = useState({jobName:'',companyName:'',startDate:'',endDate:'',desc:''})
  const [values,setValues] = useState({FirstName:'',LastName:'',age:'',email:'',phone:''})
  const [personalInfoResume,setPersonalInfoResume] = useState(false)
  const [allSchools,setAllSchools] = useState([])
  const [educationValues, setEducationValues] = useState({schoolName:"",degreeObtained:'Some Highschool',gpa:'',typeOfDegree:'',graduationMonth:'Jan',graduationYear:"",currentEnrol: false})
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
        render = {setAllJobs} jobsArray = {allJobs} idSet = {()=>{setJobsInfo((prev)=>{return {...prev,id:id++}})}}
        />
      </section>
      <section>
        <EducationInput educationValues={educationValues} change = {(e)=>inputChange(e,setEducationValues)} 
        optionSelect = {(e)=>{console.log(e.target.name);setEducationValues({...educationValues,[e.target.name]:e.target.value})}} 
        changeCurrentEnrol={()=>(setEducationValues({...educationValues,currentEnrol : !educationValues.currentEnrol}))} render = {setAllSchools}
        allSchools = {allSchools} idSet = {()=>{setEducationValues((prev)=>{return {...prev,id:schoolID++}})}}
        />  
      </section>
      <section>

      </section>
      </div>
      <section>
        {personalInfoResume?<RenderPersonalInfo values = {values}/>:null}
      </section>
      <section>
        {allJobs?<JobUi values = {allJobs} setAllJobs = {setAllJobs}/>:false}
      </section>
      <section>
        {allSchools?<RenderEducation array = {allSchools} setAllSchool={setAllSchools}/>:null }
      </section>
    </main>
  )
}

export default App
