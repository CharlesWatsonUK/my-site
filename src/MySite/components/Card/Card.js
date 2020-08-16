import React from 'react';
import Styles from './Card.module.css';

const Card = (props) => {
  
  return (
    <div className={[Styles.Card, props.className].join(' ')}>
      {props.children}
    </div>
  );
}

export default Card;