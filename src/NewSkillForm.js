function NewSkillForm() {
    return (
   <>
   <form>
        <label>Skill</label>
        <input type="text"></input>
        <label>Level</label>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input type='submit' value='Add Skill'></input>
      </form>
    </>
    )
}

export default NewSkillForm