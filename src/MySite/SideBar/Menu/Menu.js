import React from 'react';
import Styles from './Menu.module.css';

const menu = (props) => {
  
  
  
  return (
    <div className={[Styles.Menu, props.className].join(' ')}>
        <ul>
            <li><button>About Me</button></li>
            <li><button>Education</button></li>
            <li><button>Employment</button></li>
            <li><button>Skills</button></li>
            <li><button>Interests</button></li>
        </ul>
    </div>
  );
}

export default menu;