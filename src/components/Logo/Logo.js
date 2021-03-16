import React from 'react';

import mircodLogo from '../../assets/images/Fz logo black.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={mircodLogo} alt="Mircod" />
    </div>
);

export default logo;