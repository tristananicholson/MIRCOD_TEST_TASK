import React from 'react';
import classes from './PrimaryButton.module.scss';

const primaryButton = (props) => {
    const style = props.primary ? classes.Primary : classes.Secondary;

    return (
        <button className={`${style} ${classes.PrimaryButton}`} onClick={props.click}>
            {props.name}
        </button>
    );
}

export default primaryButton;