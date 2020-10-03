import React, {forwardRef} from 'react';
import Panel from '../../../components/Panel/Panel'


const Education2 = forwardRef((props, ref) => {
    const educationItems = props.data.map(educationItem => {
        let panelData = {
          imageUrl: educationItem.imageUrl,
          titleBig: educationItem.institution,
          titleSmall: educationItem.degree
        }
        return <Panel data={panelData}/>
    })
    
    return (
        <div>
             <h2><i className="fa fa-briefcase"></i> Education </h2>
             {educationItems}
        </div>
    );
})

export default Education2;