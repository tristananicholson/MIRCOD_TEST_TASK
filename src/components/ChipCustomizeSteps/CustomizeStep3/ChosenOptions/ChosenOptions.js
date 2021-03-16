import React, { Component } from 'react';
import classes from './ChosenOptions.module.scss';
import {connect} from 'react-redux';

class ChosenOptions extends Component {
    render(){
        const options = [];

        for(let option of this.props.options){
            if(option.selected){
                options.push(
                    <div className={classes.Circle} key={option.name}>
                        {option.icon}
                    </div>
                )
            }
        }

        return (
            <div className={classes.ChosenOptions}>
                <div className={classes.Heading}>
                    <div className={classes.Title}>
                        <div>CHOSEN</div>
                        <div className={classes.Bold}>OPTIONS</div>
                    </div> 
                </div>
                <div className={classes.ChosenOptions}>
                    <div>
                    {options}
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        options: state.chip.options
    }
};

export default connect(mapStateToProps, null)(ChosenOptions);