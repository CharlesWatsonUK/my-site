import React, {forwardRef} from 'react';
import Panel from '../../../components/Panel/Panel'


const Education = forwardRef((props, ref) => {
    const educationItems = props.data.map(educationItem => {
        let panelData = {
          imageUrl: educationItem.imageUrl,
          titleBig: educationItem.institution,
          titleSmall: `${educationItem.degree} \n ${educationItem.startDate} - ${educationItem.endDate}`
        }
        return <Panel data={panelData}/>
    })
    
    return (
        <div ref={ref}>
             <h2><i className="fa fa-graduation-cap"></i> Education </h2>
             {educationItems}
        </div>
    );
})

export default Education;