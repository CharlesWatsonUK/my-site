import React, {forwardRef} from 'react';
import Styles from './Panel.module.css';

const Panel = forwardRef((props, ref) => {
    const style = {
        background: `url(${props.data.imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    return (
        <div className={Styles.Panel} style={style}>
            <div className={Styles.Content}>
                <h3>{props.data.titleBig}</h3>
                <p>{props.data.titleSmall}</p> 
            </div>
        </div>
    );
})

export default Panel;