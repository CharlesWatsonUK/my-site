import React from 'react';
import Styles from './SkillsLevel.module.css';

const SkillsLevel = (props) => {
    let skillsItemsJsx = props.data.skills.map((skill, idx) => <li key={idx}><b>{skill}</b></li>)
  
    return (
        <div className={Styles.SkillsLevel}>
            <h3><u>{props.data.title}</u></h3>
            <i className={Styles.SubTitle}>{props.data.subTitle}</i>
            <ul>
                {skillsItemsJsx}
            </ul>
        </div>
  );
}

export default SkillsLevel;