import React from 'react';
import classes from './ChipCustomizeSteps.module.scss';

import DistanceConnection from './CustomizeStep3/DistanceConnection/DistanceConnection';
import ViewAndSummary from './CustomizeStep3/ViewAndSummary/ViewAndSummary';
import ChosenOptions from './CustomizeStep3/ChosenOptions/ChosenOptions';
import LiveView from './CustomizeStep3/LiveView/LiveView';
import {connect} from 'react-redux';
import LeftChevron from '../../assets/icons/leftChevron';
import RightChevron from '../../assets/icons/rightChevron';


const chipCustomizeSteps = (props) => {
    return (
        <>
        <div className={classes.ChipCustomizeSteps}>
            
            <ChosenOptions/>
            <ViewAndSummary/>
            <DistanceConnection/>
            {props.optionsSelected >= 4 ?
                <LiveView/>
            :null}
        </div>
        <div className={classes.NextStep}>
            <RightChevron/>
        </div>
        <div className={classes.PreviousStep}>
            <LeftChevron/>
        </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        optionsSelected: state.chip.optionsSelected
    }
};

export default connect(mapStateToProps)(chipCustomizeSteps);