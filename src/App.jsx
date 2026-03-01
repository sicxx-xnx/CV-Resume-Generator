import { useState } from 'react'
import './App.css'
import PersonalInfo from './componets/personalinfo.jsx'
import { inputChange } from './helperfunctions/inputChange.js'
import { JobHistory } from './componets/jobhistory.jsx'
import { RenderPersonalInfo } from './componets/renderpersonalinfo.jsx'

function App() {
  const id = 0
  const [jobsInfo,setJobsInfo] = useState({jobName:'',startDate:'',endDate:'',desc:''})
  const [values,setValues] = useState({FirstName:'',LastName:'',age:'',email:'',phone:''})
  const [personalInfoResume,setPersonalInfoResume] = useState(false)
  return (
    <main>
<section className='personalInfo'>
  <h2>Personal Information</h2>
  <PersonalInfo values = {values} change = {(event)=>inputChange(event,setValues)} submit = {(e)=> {
 e.preventDefault()
 console.log("click works")
setPersonalInfoResume(true)}}/>
</section>
<section>
<JobHistory values = {jobsInfo} change ={(event)=>inputChange(event,setJobsInfo)}/>
</section>
<section></section>
<section></section>
<section>
{ personalInfoResume?<RenderPersonalInfo values = {values}/>:null}
  
</section>
<section></section>
<section></section>
    </main>
  )
}

export default App
