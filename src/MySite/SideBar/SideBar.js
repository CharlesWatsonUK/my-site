import React from 'react';
import Styles from './SideBar.module.css';
import ProfileImage from './ProfileImage/ProfileImage';
import Title from './Title/Title';
import Links from './Links/Links';
import Menu from './Menu/Menu';
import Footer from './Footer/Footer';

const sideBar = (props) => {
  return (
    <div className={[Styles.SideBar, props.className].join(' ')}>
    
      <ProfileImage className={Styles.ProfileImage}/>
      <Title/>
      <Links className={Styles.Links}/>
      <Menu className={Styles.Menu}/>
      <Footer className={Styles.Footer}/>

    </div>
  );
}

export default sideBar;