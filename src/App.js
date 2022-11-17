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
setSkill([{name:newSkill, level:newLevel}, ...skills])
}

  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {skills.map(skill => (
        <SkillList 
        name = {skill.name}
        level = {skill.level}
        />))}
      <hr></hr> 
   <form class='NewSkillForm' onSubmit={handleAddSkill}>
        <label>Skill</label>
        <input value={newSkill} onChange={handleSkillChange}></input>
        <label value={newLevel} onChange={handleLevelChange}>Level</label>
        <select>
          <option>LEVEL 1</option>
          <option>LEVEL 2</option>
          <option>LEVEL 3</option>
          <option>LEVEL 4</option>
          <option>LEVEL 5</option>
        </select>
        <button type='submit'>Add Skill</button>
      </form>
    </div>
  )
}

export default App;
