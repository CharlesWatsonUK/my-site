import React from 'react';
import Styles from './Employment2.module.css';
import Panel from '../../../components/Panel/Panel';

const Employment2 = (props) => {
    
  const employmentItems = props.data.map(employmentItem => {
    let panelData = {
      imageUrl: employmentItem.imageUrl,
      titleBig: employmentItem.employer,
      titleSmall: employmentItem.title
    }
    return <Panel data={panelData}/>
  })
  
  
    return (
    <div>
      <h2><i className="fa fa-briefcase"></i> Employment </h2>
      {employmentItems}
    </div>
  );
}

export default Employment2;