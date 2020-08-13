import React from 'react';
import Styles from './ProfileImage.module.css';
import ProfileImage from '../../../assets/me.jpg';

const profileImage = (props) => {
  return (
    <div className={[Styles.ProfileImage, props.className].join(' ')}>
      <img src={ProfileImage} className={Styles.ProfileImage} alt="Profile"/>
    </div>
  );
}

export default profileImage;