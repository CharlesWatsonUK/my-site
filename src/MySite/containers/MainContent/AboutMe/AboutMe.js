import React from 'react';
import Styles from './AboutMe.module.css';
import ContentSection from '../../../components/ContentSection/ContentSection';
import ProfileImage from '../../../components/ProfileImage/ProfileImage';

const AboutMe = (props) => {
  
  return (
    <ContentSection>
      <h2><i className="fa fa-user"></i> About Me</h2>
      <ProfileImage className={Styles.ProfileImage} circle={true}/>
    </ContentSection>
  );
}

export default AboutMe;