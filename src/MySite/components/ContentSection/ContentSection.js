import React, {forwardRef} from 'react';
import Styles from './ContentSection.module.css';

const ContentSection = forwardRef((props, ref) => {
  
  return (
    <div className={[Styles.ContentSection, props.className].join(' ')} ref={ref}>
        {props.children}
    </div>
  );
})

export default ContentSection;