import React, {forwardRef} from 'react';
import Styles from './Skills.module.css';
import SkillsLevel from './SkillsLevel/SkillsLevel';

const Skills = forwardRef((props, ref) => {
    
    let skillsLevelsJsx = props.data.levels.map((skillLevel, idx) => <SkillsLevel key={idx} data={skillLevel}/>)
  
    return (
    <div ref={ref}>
      <h2><i className="fa fa-wrench"></i> Skills </h2>
      <div className={Styles.SkillsContainer}>
        {skillsLevelsJsx}
      </div>
    </div>
  );
})

export default Skills;