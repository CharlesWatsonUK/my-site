import React, {forwardRef} from 'react';
import Panel from '../../../components/Panel/Panel';

const Employment = forwardRef((props, ref) => {
    
  const employmentItems = props.data.map(employmentItem => {
    let panelData = {
      imageUrl: employmentItem.imageUrl,
      titleBig: employmentItem.employer,
      titleSmall: `${employmentItem.startDate} - ${employmentItem.endDate}`
    }
    return <Panel data={panelData}/>
  })
  
  
    return (
    <div ref={ref}>
      <h2><i className="fa fa-briefcase"></i> Employment </h2>
      {employmentItems}
    </div>
  );
})

export default Employment;