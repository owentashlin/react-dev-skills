import './SkillsList.css'

function SkillList({name, level}){
    return (
        <>
            <ul className='SkillListItem'>
            <li>{name}</li> 
            <li className='level'>LEVEL {level}</li>
            </ul>
        </>
    )
}

export default SkillList