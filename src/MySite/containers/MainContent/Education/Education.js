import React, {forwardRef} from 'react';
import Styles from './Education.module.css';
import EducationItem from './EducationItem/EducationItem';
import ContentSection from '../../../components/ContentSection/ContentSection';

const Education = forwardRef((props, ref) => {
    
    let educationItemsJsx = props.data.map((eudcationItem, idx) => <EducationItem data={eudcationItem} key={idx}/>)

  return (
    <ContentSection ref={ref} className={Styles.Education}>
      <h2><i className="fa fa-graduation-cap"></i> Education</h2>
      {educationItemsJsx}
    </ContentSection>
  );
})

export default Education;