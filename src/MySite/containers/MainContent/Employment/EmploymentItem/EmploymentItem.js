import React from 'react';
import Styles from './EmploymentItem.module.css';
import TechTag from '../../../../components/TechTag/TechTag';
import Card from '../../../../components/Card/Card';

const EmploymentItem = (props) => {
  
  let techTagsJsx = props.data.skills.map((skill, idx) => <TechTag key={idx}>{skill}</TechTag>);

  return (
    <Card className={Styles.EmploymentItem}>
      <h3><u>{props.data.employer}</u></h3>
      <strong>{props.data.title}</strong> 
      <br/>
      {props.data.startDate} - {props.data.endDate}
      <div className={Styles.Skills}>
        {techTagsJsx}
      </div>
    </Card>
  );
}

export default EmploymentItem;