import React from 'react';
import Styles from './Title.module.css';

const title = (props) => {
  return (
    <div className={[Styles.Title, props.className].join(' ')}>
      <h1>Charles Watson</h1>
      <h3>Software Engineer</h3>
    </div>
  );
}

export default title;