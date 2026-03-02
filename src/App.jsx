import { useState } from 'react'
import './App.css'
import PersonalInfo from './componets/personalinfo.jsx'
import { inputChange } from './helperfunctions/inputChange.js'
import { JobHistory } from './componets/jobhistory.jsx'
import { RenderPersonalInfo } from './componets/renderpersonalinfo.jsx'
import { JobUi } from './componets/renderjobhistory.jsx'

function App() {
  let id = 0
  const [allJobs,setAllJobs] = useState([])
  const [jobsInfo,setJobsInfo] = useState({jobName:'',startDate:'',endDate:'',desc:''})
  const [values,setValues] = useState({FirstName:'',LastName:'',age:'',email:'',phone:''})
  const [personalInfoResume,setPersonalInfoResume] = useState(false)
  return (
    <main>
      <div className="info-entry-container">
      <section className='personalInfo'>
        <h2>Personal Information</h2>
        <PersonalInfo values = {values} change = {(event)=>inputChange(event,setValues)} submit = {(e)=> {
          e.preventDefault()
          console.log("click works")
          setPersonalInfoResume(true)}}/>
      </section>
      <section className='jobHistory'>
        <JobHistory values = {jobsInfo} change ={(event)=>inputChange(event,setJobsInfo)} render = {setAllJobs} jobsArray = {allJobs} idSet = {()=>{setJobsInfo((prev)=>{return {...prev,id:id++}})}}/>
      </section>
      <section>

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

      </section>
    </main>
  )
}

export default App
