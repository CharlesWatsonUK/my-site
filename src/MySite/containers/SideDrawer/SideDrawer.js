import React from 'react';
import Styles from './SideDrawer.module.css';
import Links from '../../components/Links/Links';
import Menu from '../../components/Menu/Menu';
import Footer from '../../components/Footer/Footer';
import ProfileImage from '../../components/ProfileImage/ProfileImage'


const SideDrawer = (props) => {
  let openCloseClass = Styles.Closed
  if(props.isOpen){
      openCloseClass = Styles.Open
  }

  return (
    <div className={[Styles.SideDrawer, props.className, openCloseClass].join(' ')}>
     <ProfileImage className={Styles.ProfileImage} circle={true}/>
     <Links className={Styles.Links}/>
     <Menu className={Styles.Menu}/>
     <Footer className={Styles.Footer}/>
    </div>
  );
}

export default SideDrawer;