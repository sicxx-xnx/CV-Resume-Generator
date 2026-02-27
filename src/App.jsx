import { useState } from 'react'
import './App.css'
import PersonalInfo from './componets/personalinfo.jsx'
import { inputChange } from './helperfunctions/inputChange.js'

function App() {
  const [count, setCount] = useState(0)
  const [values,setValues] = useState({FirstName:'',LastName:'',age:'',email:'',phone:''})

  return (
    <main>
<section className='personalInfo'>
  <PersonalInfo values = {values} change = {(event)=>inputChange(event,setValues)}/>
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
