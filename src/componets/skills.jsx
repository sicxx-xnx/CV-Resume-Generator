






export function SkillInput(prop){
    return (
     <>
        <h2>Skills</h2>
        <div className="skill-added"></div>
       <form action="post" onSubmit={prop.addSkill}>
            <label htmlFor="skills"> New Skill
                <input type="text" name="skills" id="skills" value={prop.skill.value} onChange={prop.changeSkill} />
            </label>
            <button style={{marginTop:"1rem"}} type="submit">Submit</button>
            <div className="userflowButton"><button type="button" onClick={prop.userFlowPreviousStep}>Previous Section</button>
    <button type="button" onClick = {prop.userFlowNextStep}>Creat Resume</button></div> 
        </form>
     </>
    )
}



export function RenderSkills(props){
const skills = []    
props.skillsArray.forEach((skill)=> 
{skills.push(<li key={skill.value}>{skill.value}</li> )
})

 return (
    <>
    {skills.length < 1?null:
    <div style={{display:"flex",gap:'10px',alignItems:'anchor-center'}}>
        <h2 style={{paddingLeft:'.5rem'}}>
            skills</h2> 
            <button style={{height:"50%",width:"unset"}} onClick={props.edit}>Edit</button></div>
}
    <ul>{skills}</ul>
    </>
 )   }
