import React from 'react';
import Styles from './Links.module.css';

const links = (props) => {
  return (
    <div className={[Styles.Links, props.className].join(' ')}>
        <button><i className="fa fa-linkedin"/></button>
        <button><i className="fa fa-github"/></button>  
    </div>
  );
}

export default links;