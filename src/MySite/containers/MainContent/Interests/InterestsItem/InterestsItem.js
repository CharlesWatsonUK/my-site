import React, {forwardRef} from 'react';
import Styles from './InterestsItem.module.css';
import Card from '../../../../components/Card/Card';

const Interests = forwardRef((props, ref) => {
    
    return (
    <Card ref={ref} className={Styles.InterestsItem}>  
      <h3><i className="fa fa-golf-ball"></i> {props.data.interest}</h3>
      <p>{props.data.description}</p>
    </Card>
  );
})

export default Interests;