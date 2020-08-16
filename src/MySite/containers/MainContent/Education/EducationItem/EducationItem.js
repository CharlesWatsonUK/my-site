import React from 'react';
import Card from '../../../../components/Card/Card';

const EducationItem = (props) => {
  
  return (
    <Card>
      <h3><u>{props.data.institution}</u></h3>
      <strong>
          {props.data.degree}
          <br/>
          {props.data.grade}
      </strong>
      <br/>
      {props.data.startDate} - {props.data.endDate}
    </Card>
  );
}

export default EducationItem;