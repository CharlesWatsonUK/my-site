import React from 'react';
import Styles from './TechTag.module.css';

const TechTag = (props) => {
  
  return (
    <div className={Styles.TechTag}>
        {props.children}
    </div>
  );
}

export default TechTag;