import React, {forwardRef} from 'react';
import Styles from './AboutMe.module.css';
import ContentSection from '../../../components/ContentSection/ContentSection';
import ProfileImage from '../../../components/ProfileImage/ProfileImage';
import Links from '../../../components/Links/Links';

const AboutMe = forwardRef((props, ref) => {
    return (
    <ContentSection ref={ref} className={Styles.AboutMe}>
      <h2><i className="fa fa-user"></i> About Me</h2>
      <div className={Styles.AboutMeContent}>
        <ProfileImage className={Styles.ProfileImage} circle={true}/>
        <div className={Styles.Bio}>
          <p className={Styles.ShortBio}>
            {props.data.bioShort}
          </p>
          <p>
            {props.data.bioLong}
          </p>
        </div>
      </div>
      <Links className={Styles.Links}/>
    </ContentSection>
  );
})

export default AboutMe;