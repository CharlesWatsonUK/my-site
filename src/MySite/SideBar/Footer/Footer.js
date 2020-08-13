import React from 'react';
import Styles from './Footer.module.css';

const footer = (props) => {
  return (
    <div className={[Styles.Footer, props.className].join(' ')}>
        <div>
            <a href="Privacy.html">Privacy Notice</a>
        </div>
       <div>
            <a href="License.html">License</a>
       </div>
    </div>
  );
}

export default footer;