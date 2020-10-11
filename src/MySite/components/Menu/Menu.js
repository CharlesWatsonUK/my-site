import React from 'react';
import Styles from './Menu.module.css';

const Menu = (props) => {
  return (
    <div className={[Styles.Menu, props.className].join(' ')}>
        <ul>
            <li><button onClick={() => props.sectionSelected("aboutMe")}>About Me</button></li>
            <li><button onClick={() => props.sectionSelected("employment")}>Employment</button></li>
            <li><button onClick={() => props.sectionSelected("education")}>Education</button></li>
            <li><button onClick={() => props.sectionSelected("skills")}>Skills</button></li>
            <li><button onClick={() => props.sectionSelected("contact")}>Contact</button></li>
        </ul>
    </div>
  );
}

export default Menu;