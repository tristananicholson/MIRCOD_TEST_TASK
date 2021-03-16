import React from 'react';
import classes from './LiveView.module.scss';
import LiveView from '../../../../assets/images/3d1+logo.PNG';

const liveView = (props) => {
    return (
        <div className={classes.View}>
            <img src={LiveView}></img>
            <div>
                <p className={classes.Big}>
                    LIVE
                </p>
                <p className={classes.Small}>
                    VIEW
                </p>
            </div>
        </div>
    );
}

export default liveView;