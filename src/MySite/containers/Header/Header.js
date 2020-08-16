import React from 'react';
import Styles from './Header.module.css';
import Title from '../../components/Title/Title'

const Header = (props) => {
  return (
    <div className={[Styles.Header, props.className].join(' ')}>
      <div className={Styles.MenuIcon}>
        <button onClick={props.openCloseSideDrawer}><i className="fa fa-bars"></i></button>
      </div>
      <Title className={Styles.Title}/>
    </div>
  );
}

export default Header;