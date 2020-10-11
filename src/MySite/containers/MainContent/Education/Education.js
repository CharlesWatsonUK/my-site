import React, {forwardRef} from 'react';
import Panel from '../../../components/Panel/Panel'


const Education = forwardRef((props, ref) => {
    const educationItems = props.data.map((educationItem, idx) => {
        let panelData = {
          imageUrl: educationItem.imageUrl,
          titleBig: educationItem.institution,
          titleSmall: `${educationItem.degree} ${educationItem.grade} \n ${educationItem.startDate} - ${educationItem.endDate}`
        }
        return <Panel key={idx} data={panelData}/>
    })
    
    return (
        <div ref={ref}>
             <h2><i className="fa fa-graduation-cap"></i> Education </h2>
             {educationItems}
        </div>
    );
})

export default Education;