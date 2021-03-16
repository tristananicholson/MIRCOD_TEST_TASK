import React, { Component } from 'react';
import ChipCustomizeSteps from '../../../components/ChipCustomizeSteps/ChipCustomizeSteps';
import OptionsCarousel from '../../../components/UI/OptionsCarousel/OptionsCarousel';
import classes from './ChipOptions.module.scss';
import {connect} from 'react-redux';
import * as actionTypes from '../../../store/actions/actionTypes';
import PrimaryButton from '../../../components/UI/Buttons/PrimaryButton/PrimaryButton';

class ChipOptions extends Component {
    state = {
        step: 3
    };

    render(){
        let carouselModal = (
            <div className={classes.CarouselModal}>
                <div className={classes.Title}><div>ADD CUSTOM OPTION</div></div>
                <div className={classes.Fields}>
                    <div className={classes.Field}>NAME</div>
                    <div className={classes.Input}><input/></div>
                </div>
                <div className={classes.Button}>
                    <PrimaryButton name={"ADD OPTION"} click={()=>{}}/>
                </div>
            </div>
        );

        return (
            <section className={classes.ChipOptions}>
                <div className={classes.OptionsCarousel}>
                    <OptionsCarousel 
                        options={this.props.options} 
                        select={this.props.onOptionSelect}
                        left={this.props.onOptionsLeft}
                        right={this.props.onOptionsRight}
                        modal={carouselModal}/>
                </div>
                <ChipCustomizeSteps/>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        options: state.chip.options
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onOptionSelect: (name)=>dispatch({type: actionTypes.SELECT_OPTION, payload: {selected: name}}),
        onOptionsLeft: ()=>dispatch({type: actionTypes.SHIFT_OPTIONS_LEFT, payload: {}}),
        onOptionsRight: ()=>dispatch({type: actionTypes.SHIFT_OPTIONS_RIGHT, payload: {}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChipOptions);