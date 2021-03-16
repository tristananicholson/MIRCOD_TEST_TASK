import React from 'react';
import classes from './DistanceConnection.module.scss'
import ProgressMap from '../../../UI/ProgressMap/ProgressMap';
import SliderBar from '../../../UI/SliderBar/SliderBar';
import OptionsGrid from '../../../UI/OptionsGrid/OptionsGrid';
import PrimaryButton from '../../../UI/Buttons/PrimaryButton/PrimaryButton';
import {connect} from 'react-redux';
import * as actionTypes from '../../../../store/actions/actionTypes';

const distanceConnection = (props) => {
    function onChangeHandler(e){
        props.onDistanceChange(e.target.value);
    }
    return (
        <section className={classes.DistanceConnection}>
                <div className={classes.Progress}>
                    <div className={classes.Container}>
                        <ProgressMap
                            totalSteps={4}
                            currentStep={3}/>
                    </div>
                </div>
                <div className={classes.Transmission}>
                    <div className={classes.Title}>
                        <div>TRANSMISSION</div>
                        <div><span>DISTANCE</span></div>
                    </div>
                    <div className={classes.Input}>
                        <SliderBar
                            minValue={0}
                            maxValue={50}
                            change={onChangeHandler}
                            unit={"m"}
                            parameter={"Distance"}
                            value={props.distance}
                        />
                    </div>
                </div>
                <div className={classes.Separator}>

                </div>
                <div className={classes.Connection}>
                    <div className={classes.Grid}>
                        <OptionsGrid
                            click={props.onSelectConnection}
                            count={8}
                            options={props.connections}
                            parameter={"type of connection"}/>
                    </div>
                </div>
                <div className={classes.Button}>
                    {props.connectionSelected && props.optionsSelected >= 4?
                        <PrimaryButton name={"NEXT STEP"} click={()=>{}}/>
                    :null}
                </div>
            </section>
    );
}

const mapStateToProps = (state) => {
    return {
        distance: state.chip.distance,
        connections: state.chip.connections,
        optionsSelected: state.chip.optionsSelected,
        connectionSelected: state.chip.connectionSelected
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDistanceChange: (distance)=>dispatch({type: actionTypes.CHANGE_DISTANCE, payload: {distance: distance}}),
        onSelectConnection: (name)=>dispatch({type: actionTypes.SELECT_CONNECTION, payload: {name: name}})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(distanceConnection);