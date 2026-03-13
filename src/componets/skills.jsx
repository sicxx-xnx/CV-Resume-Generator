






export function SkillInput(prop){
    return (
     <>
        <h2>Skills</h2>
        <div className="skill-added"><p>Skill</p></div>
       <form action="post" onSubmit={prop.addSkill}>
            <label htmlFor="skills"> New Skill
                <input type="text" name="skills" id="skills" value={prop.skill.value} onChange={prop.changeSkill} />
            </label>
            <button style={{marginTop:"1rem"}} type="submit">Submit</button>
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
    <ul>{skills}</ul>
 )   }
