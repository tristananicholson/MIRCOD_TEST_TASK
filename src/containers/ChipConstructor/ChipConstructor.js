import React, {Component} from 'react';
import ChipOptions from './ChipOptions/ChipOptions';
import classes from './ChipConstructor.module.scss';

class ChipConstructor extends Component{
    render(){
        return (
            <> 
                <section className={classes.Title}>
                        <h1>CHIP <span>CONSTRUCTOR</span></h1>
                </section>
                <ChipOptions/>
            </>
        );
    }
}

export default ChipConstructor;