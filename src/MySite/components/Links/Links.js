import React from 'react';
import Styles from './Links.module.css';

const Links = (props) => {
  const sendUserTo = (destination) => {
    if(destination === 'linkedin') {
      window.open("https://www.linkedin.com/in/charles-watson/")
    }else {
      window.open("https://github.com/CharlesWatsonUK")
    }
  }
  
  return (
    <div className={[Styles.Links, props.className].join(' ')}>
        <button onClick={() => sendUserTo('linkedin')}><i className="fa fa-linkedin"/></button>
        <button onClick={() => sendUserTo('github')}><i className="fa fa-github"/></button>  
    </div>
  );
}

export default Links;