import './SkillsList.css'

function SkillList({name, level}){
    return (
        <>
            <ul class='SkillListItem'>
            <li>{name}</li> 
            <li class='level'>LEVEL {level}</li>
            </ul>
        </>
    )
}

export default SkillList