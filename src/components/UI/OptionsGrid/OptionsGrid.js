import React from 'react';
import classes from './OptionsGrid.module.scss';
import CheckIcon from '../../../assets/images/checked.png';
import LogoXBee from '../../../assets/images/logo_XBee.png';

const optionsGrid = (props) =>{
    const options = [];

    for(let i = 0; i < props.count; i++){
        options.push(
            <div className={classes.Option} key={i} onClick={()=>props.click(props.options[i].name)}>
                <div className={props.options[i].selected ? classes.Selected : null}>
                    {props.options[i].selected ? 
                        <img className={classes.Check} src={CheckIcon}/>
                    :null}
                    <img src={props.options[i].image}/>
                </div> 
            </div>);
    }
    return (
        <div className={classes.OptionsGrid}>
            <div className={classes.Header}>
                <div className={classes.Title}>
                    CHOOSE&nbsp;<span>{props.parameter}</span>
                </div>
            </div>
            <div className={classes.Grid}>
                {options}
            </div>
        </div>
    );
}

export default optionsGrid;