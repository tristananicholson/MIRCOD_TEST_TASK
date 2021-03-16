import React from 'react';
import classes from './SliderBar.module.scss';

const sliderBar = (props) => {
    return (
        <div className={classes.SliderBar}>
            <div className={classes.Header}>
                <div className={classes.Title}>
                    CHOOSE&nbsp;<span>{props.parameter}</span>
                </div>
                <div className={classes.CurrentValue}>
                    <div className={classes.Parameter}>
                        CURRENT<br/>{props.parameter}
                    </div>
                    <div className={classes.Value}>
                        {props.value}<span>{props.unit}</span>
                    </div>
                </div>
            </div>
            <div className={classes.Slider}>
                <div className={classes.Input}>
                    <input type="range" min={props.minValue} max={props.maxValue} value={props.value} onChange={props.change}/>
                </div>
                <div className={classes.Info}>
                    <div>
                        {props.minValue}{props.unit}
                    </div>
                    <div>
                        {props.maxValue}{props.unit}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default sliderBar;