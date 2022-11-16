import './NewSkillForm.css' 

function NewSkillForm() {
    return (
   <>
   <form class='NewSkillForm'>
        <label>Skill</label>
        <input type="text"></input>
        <label>Level</label>
        <select>
          <option>LEVEL 1</option>
          <option>LEVEL 2</option>
          <option>LEVEL 3</option>
          <option>LEVEL 4</option>
          <option>LEVEL 5</option>
        </select>
        <button type='submit'>Add Skill</button>
      </form>
    </>
    )
}

export default NewSkillForm