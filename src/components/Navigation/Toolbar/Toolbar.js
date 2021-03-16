import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';

const toolbar = props => {
    return (
        <header className={classes.Toolbar}>
            <Logo/>
        </header> 
    );
};

export default toolbar;