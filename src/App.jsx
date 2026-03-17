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
import { Link } from './componets/linksinput.jsx'
import { Summary } from './componets/summary.jsx'
import { RenderSkills, SkillInput } from './componets/skills.jsx'
import { RenderLinks } from './componets/renderLinks.jsx'
import { RenderSummary } from './componets/rendersummary.jsx'
import { UserInputFlow } from './componets/userinputflow.jsx'
import { RenderPopup } from './componets/popup.jsx'
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
  const [allLinks,setAllLinks] = useState([])
  const [links,setLinks] = useState({ 
    Linkdin: "",
    Instagram:"",
    Youtube:"",
    Github:"",
    Facebook:""
  })

  const [educationValues, setEducationValues] = useState({schoolName:"",degreeObtained:'',gpa:'',typeOfDegree:'',graduationMonth:'Jan',graduationYear:"",currentEnrol: false})
  const [summary,setSummary] = useState("")
  const [summaryVisibility,setSummaryVisibility] = useState(false)
  const [skill,setSkill] = useState({value:''})
  const [allSkills, setAllSkills] = useState([])
  const [userFlow, setUserFlow] = useState(1)
  const [popupVisibile, changePopupVisibility] = useState(false)
  const [popupText,changePopupText] = useState("")
  const [popupClass, setPopupClass] = useState("")
  return (
<main>
    <div className="popupholder">
   
      {popupVisibile?
      <RenderPopup text = {popupText} class = {popupClass}/>
      
      :null}
    
  </div>
{userFlow !== 7?  
  <div className="info-entry-container">
    <section>

      <UserInputFlow 
       userFlow = {userFlow}
       userFlowNextStep = {()=>setUserFlow(()=> {
        return userFlow + 1})}
       userFlowPreviousStep = {()=>setUserFlow(()=> {
        return userFlow - 1})}
        changePopupText = {changePopupText}
        changePopupVisibility = {changePopupVisibility}
        setPopupClass = {setPopupClass}
      //  begin user props
       userInputValues = {values} setUserValues = {setValues} submitUser = {(e)=> {
          e.preventDefault()
          setPersonalInfoResume(true)
        setUserFlow(()=> {return userFlow + 1})
        }}  
      // begin job history props    
          jobValues = {jobsInfo} changeJobValues = {(event)=>inputChange(event,setJobsInfo)} jobsArray = {allJobs}
          renderJobs = {setAllJobs} jobIdSet = {()=>{
            setID(id++)
          setJobsInfo((prev)=>{return {...prev,id:id}})}}
          setJobObj = {setJobsInfo} setAllJobs = {setAllJobs}
      // begin education props
          educationValues={educationValues} changeEducationValues = {(e)=>inputChange(e,setEducationValues)} setEducationObj = {setEducationValues}
          educationRender = {setAllSchools} allSchools = {allSchools} EducationIdSet = {()=>{
          setEducationValues((prev)=>{return {...prev,id:crypto.randomUUID()}})}} 
      // Begin Link Props 
        links = {links} changeLink = {(event)=>inputChange(event,setLinks)}
      // summary props
      summary = {summary} changeSummary = {(e) => {setSummary(e.target.value)}} showSummary = {()=>{setSummaryVisibility(()=>{return true})}}
      // skill props
        skill = {skill} changeSkill = {(e)=>{setSkill((prev)=>({...prev, value:e.target.value}))}}
        addSkill = {(e)=>{
              e.preventDefault()  
              const newObj = {
              ...skill,
              id: crypto.randomUUID() 
              }
              setAllSkills((prev)=>[...prev, newObj])
              setSkill({value:""})
            }}/>
    </section> 
  </div>
:null}

  {userFlow === 7? 
  <div className="" style={{width:'60%',}}>
  <div className="resume">
      <section className='personalInfoResume'>
        {personalInfoResume?<RenderPersonalInfo edit = {()=>{(setUserFlow(()=>1))}}  jobs={allJobs} values = {values}/>:null}
      </section>
        <div style={{display:"flex", paddingLeft:"2rem",paddingRight:"2rem", gap:".5rem", paddingTop:"1rem"}}>
          <div className="">
            <section>
              {allJobs?<JobUi values = {allJobs} edit = {()=>{(setUserFlow(()=>2))}} setAllJobs = {setAllJobs}/>:false}
            </section>
            <section>
              {allSchools?<RenderEducation  edit = {()=>{(setUserFlow(()=>3))}} array = {allSchools} setAllSchools={setAllSchools}/>:null }
            </section>
         </div>
        
        <div className="" style={cssStyles[0]} >
          <section>
              <RenderLinks links = {links} edit = {()=>{(setUserFlow(()=>4))}}  />
              <div className='divbordersection' style={{height:".2rem", backgroundColor:"blue" }}></div>
          </section>
          <section>
            {summaryVisibility?<RenderSummary edit = {()=>{(setUserFlow(()=>5))}} summaryValue= {summary}/>:null}
          </section>
          <section>
            <RenderSkills edit = {()=>{(setUserFlow(()=>6))}} skillsArray = {allSkills}/>
          </section>
          <section>
            <button type='click' onClick={()=>window.print()}>Print Resume</button>
          </section>
        </div>
      </div>
      </div>
      </div> :null}
        
    </main>
  )
}

export default App
