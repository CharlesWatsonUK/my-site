import React, {forwardRef} from 'react';
import Styles from './Interests.module.css';
import ContentSection from '../../../components/ContentSection/ContentSection';
import InterestsItem from './InterestsItem/InterestsItem';

const Interests = forwardRef((props, ref) => {
    
    let interestsItemsJsx = props.data.map(interestsItem => 
       <InterestsItem data={interestsItem} key={interestsItem.interesta}/>)

    return (
    <ContentSection ref={ref} className={Styles.Interests}>  
      <h2><i className="fa fa-briefcase"></i> Interests</h2>
      <div className={Styles.InterestsContainer}>
        {interestsItemsJsx}
      </div>
    </ContentSection>
  );
})

export default Interests;