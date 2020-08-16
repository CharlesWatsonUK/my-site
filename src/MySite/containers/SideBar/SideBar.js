import React from 'react';
import Styles from './SideBar.module.css';
import ProfileImage from '../../components/ProfileImage/ProfileImage';
import Title from '../../components/Title/Title';
import Links from '../../components/Links/Links';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';

const SideBar = (props) => {
  return (
    <div className={[Styles.SideBar, props.className].join(' ')}>
    
      <ProfileImage className={Styles.ProfileImage} circle={true}/>
      <Title/>
      <Links className={Styles.Links}/>
      <Menu className={Styles.Menu}/>
      <Footer className={Styles.Footer}/>

    </div>
  );
}

export default SideBar;