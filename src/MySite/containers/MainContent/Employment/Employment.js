import React from 'react';
import Styles from './Employment.module.css';
import ContentSection from '../../../components/ContentSection/ContentSection';
import EmploymentItem from './EmploymentItem/EmploymentItem';

const Employment = (props) => {
    
    let employmentItemsJsx = props.data.map(employmentItem => 
       <EmploymentItem data={employmentItem} key={employmentItem.employer}/>)

    return (
    <ContentSection className={Styles.Employment}>  
      <h2><i className="fa fa-briefcase"></i> Employment </h2>
      {employmentItemsJsx}
    </ContentSection>
  );
}

export default Employment;