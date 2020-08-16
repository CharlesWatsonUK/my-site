import React from 'react';
import Styles from './MainContent.module.css';
import AboutMe from './AboutMe/AboutMe';
import Employment from './Employment/Employment';
import Education from './Education/Education';

const MainContent = (props) => {
  
  return (
    <div className={[Styles.MainContent, props.className].join(' ')}>
      <AboutMe/>
      <Employment data={props.data.employment} />
      <Education data={props.data.education} />
    </div>
  );
}

export default MainContent;