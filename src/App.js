import './App.css';
import {useState} from 'react'
import SkillList from './SkillList';


function App() {
  const [skills, setSkill] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },
  ])

const [newSkill, setNewSkill] = useState()
const [newLevel, setNewLevel] = useState()

const handleSkillChange = (event) => {
setNewSkill (event.target.value)
}

const handleLevelChange = (event) => {
setNewLevel (event.target.value)
}

const handleAddSkill = (event) => {
event.preventDefault()
console.log(newSkill)
console.log(newLevel)
setSkill([{name:newSkill, level:newLevel}, ...skills])
setNewSkill('')
}
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {skills.map(skill => (
        <SkillList 
        key={skill.name} name={skill.name}
        key={skill.level} level={skill.level}
        />))}
      <hr></hr> 
   <form className='NewSkillForm' onSubmit={handleAddSkill}>
        <label>Skill</label>
        <input value={newSkill} onChange={handleSkillChange} required></input>
        <label value={newLevel} onChange={handleLevelChange}>Level</label>
        <select>
          <option value={1}>LEVEL 1</option>
          <option value={2}>LEVEL 2</option>
          <option value={3}>LEVEL 3</option>
          <option value={4}>LEVEL 4</option>
          <option value={5}>LEVEL 5</option>
        </select>
        <button type='submit'>Add Skill</button>
      </form>
    </div>
  )
}

export default App;
