import React from 'react';
import Styles from './ContentSection.module.css';

const ContentSection = (props) => {
  
  return (
    <div className={[Styles.ContentSection, props.className].join(' ')}>
        {props.children}
    </div>
  );
}

export default ContentSection;