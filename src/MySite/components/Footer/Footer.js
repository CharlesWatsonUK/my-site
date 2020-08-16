import React from 'react';
import Styles from './Footer.module.css';

const Footer = (props) => {
  return (
    <div className={[Styles.Footer, props.className].join(' ')}>
        <div>
            <button>Privacy Notice</button>
        </div>
       <div>
            <button>License Notice</button>
       </div>
    </div>
  );
}

export default Footer;