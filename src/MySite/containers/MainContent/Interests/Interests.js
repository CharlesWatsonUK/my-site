import React, {forwardRef} from 'react';
import Styles from './Interests.module.css';
import Panel from '../../../components/Panel/Panel';

const Interests = forwardRef((props, ref) => {
    
    let interestsItemsJsx = props.data.map((interestsItem, idx) => {
      let panelData = {
        titleBig: interestsItem.interest,
        imageUrl: interestsItem.imageUrl
      }
      return <Panel key={idx} data={panelData} small={true}/>
    })

    return (
    <div ref={ref}>
      <h2><i className="fa fa-smile"></i> Interests </h2>
      <div className={Styles.Interests}>
        {interestsItemsJsx}
      </div>
    </div>
  );
})

export default Interests;