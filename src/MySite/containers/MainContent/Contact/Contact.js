import React, {forwardRef} from 'react';
import Styles from './Contact.module.css';

const Contact = forwardRef((props, ref) => {
  
    return (
        <div ref={ref} className={Styles.Contact}>
            <h2><i className="fa fa-comments"></i> Contact </h2>
            <p>Please contact me on <a href="https://www.linkedin.com/in/charles-watson/">LinkedIn</a>, there you will also find my recommendations and endorsements.</p>
        </div>
  );
})

export default Contact;