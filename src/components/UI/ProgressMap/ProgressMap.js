import React from 'react';
import classes from './ProgressMap.module.scss';
import CheckIcon from '../../../assets/images/checked.png';

const progressMap = (props) => {
    const icons = [];

    for(let i = 1; i <= props.totalSteps; i++){
        icons.push(
            <div style={i === props.currentStep ? {backgroundColor: '#ee431f'} : {}} key={i}>
                {i <= props.currentStep ?
                    <img src={CheckIcon}></img>
                :null}
            </div>);
    };

    return (

        <div className={classes.ProgressMap}>
            <div className={classes.Icons}>
                {icons}
            </div>
            <div className={classes.Info}>
                Completed {props.currentStep} steps of {props.totalSteps}
            </div>
        </div>
    );
}

export default progressMap;