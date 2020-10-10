import React from 'react';
import Styles from './SkillsLevel.module.css';

const SkillsLevel = (props) => {
    let skillsItemsJsx = props.data.skills.map((skill, idx) => <li key={idx}>{skill}</li>)
  
    return (
        <div className={Styles.SkillsLevel}>
            <h3>{props.data.title}</h3>
            <i>{props.data.subTitle}</i>
            <ul>
                {skillsItemsJsx}
            </ul>
        </div>
  );
}

export default SkillsLevel;