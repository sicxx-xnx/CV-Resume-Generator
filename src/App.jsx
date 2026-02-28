import { useState } from 'react'
import './App.css'
import PersonalInfo from './componets/personalinfo.jsx'
import { inputChange } from './helperfunctions/inputChange.js'
import { JobHistory } from './componets/jobhistory.jsx'
function App() {
  const id = 0
  const [jobsInfo,setJobsInfo] = useState({jobName:'',startDate:'',endDate:''})
  const [values,setValues] = useState({FirstName:'',LastName:'',age:'',email:'',phone:''})

  return (
    <main>
<section className='personalInfo'>
  <h2>Personal Information</h2>
  <PersonalInfo values = {values} change = {(event)=>inputChange(event,setValues)}/>
</section>
<section>
<JobHistory values = {jobsInfo} change ={(event)=>inputChange(event,setJobsInfo)}   />
</section>
<section></section>
<section></section>
<section></section>
<section></section>
<section></section>
    </main>
  )
}

export default App
