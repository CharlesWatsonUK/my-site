import React from 'react';
import Styles from './MySite.module.css';
import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';

const mySite = () => {
  return (
    <div className={Styles.MySite}>
      <SideBar className={Styles.SideBar}/>
      <MainContent className={Styles.MainContent}/>
    </div>
  );
}

export default mySite;