import React, {forwardRef} from 'react';
import Styles from './Panel.module.css';

const Panel = forwardRef((props, ref) => {
    const style = {
        background: `url(${props.data.imageUrl})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const splitNewLines = (text) => text.split('\n').map(t => <p>{t}</p>)

    const sizeStyle = props.small ? Styles.PanelSmall : Styles.PanelLarge

    return (
        <div className={[Styles.Panel, sizeStyle].join(' ')} style={style}>
            <div className={Styles.Header}>
                <h3>{props.data.titleBig}</h3>
                <p>{splitNewLines(props.data.titleSmall)}</p> 
            </div>
        </div>
    );
})

export default Panel;