import React from 'react';
import Styles from './ProfileImage.module.css';
import ProfileImageJpg from '../../../assets/me.jpg';

const ProfileImage = (props) => {
  let imageStyles = [Styles.ProfileImage]
  if(props.circle) {
    imageStyles.push(Styles.ProfileImageCircle)
  }
  
  return (
    <div className={[props.className].join(' ')}>
      <img src={ProfileImageJpg} className={imageStyles.join(' ')} alt="Profile"/>
    </div>
  );
}

export default ProfileImage;