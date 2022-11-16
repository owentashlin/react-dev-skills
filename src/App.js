import './App.css';

import NewSkillForm from './NewSkillForm'
import SkillList from './SkillList';

const skills = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 3 },
  { name: "JavaScript", level: 4 },
  { name: "Python", level: 2 },
]

function App() {
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      {skills.map(skill => (
        <SkillList 
        name = {skill.name}
        level = {skill.level}
        />))}
      <hr></hr>
      <NewSkillForm />
    </div>
  )
}


export default App;
