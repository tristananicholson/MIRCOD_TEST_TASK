import React, { Component } from 'react';
import classes from './OptionsCarousel.module.scss';
import LeftChevron from '../../../assets/icons/leftChevron';
import RightChevron from '../../../assets/icons/rightChevron';
import AddCircle from '../../../assets/icons/addCircle';
import Modal from '../../UI/Modal/Modal';

class OptionsCarousel extends Component {

    state = {
        modalOpen: false
    };

    rightClickHandler = () => {
        document.getElementsByClassName(classes.Window)[0].classList.add(classes.TranslateXRight);

        setTimeout(()=>{
            this.props.right();
            document.getElementsByClassName(classes.Window)[0].classList.remove(classes.TranslateXRight);
        },450);
        
    };

    leftClickHandler = () => {
        document.getElementsByClassName(classes.Window)[0].classList.add(classes.TranslateXLeft);

        setTimeout(()=>{
            this.props.left();
            document.getElementsByClassName(classes.Window)[0].classList.remove(classes.TranslateXLeft);
        },450);
    }

    modalOpenedHandler = () => {
        this.setState({modalOpen: true});
    }

    modalClosedHandler = () => {
        this.setState({modalOpen: false});
    }

    render(){
        const options = [];
        

        for(let i = 0; i < this.props.options.length; i++){
            options.push(
                <div className={`${classes.Option} ${this.props.options[i].selected ? classes.Selected : null}`} key={i}>
                    <div className={classes.Circle} 
                        onClick={()=>this.props.select(this.props.options[i].name)}>
                        {this.props.options[i].icon}
                    </div>
                    <div className={classes.Name}>
                        {this.props.options[i].name}
                    </div>
            </div>);
        }

        return (
            <>
            <div className={classes.OptionsCarousel}>
                <div className={classes.LeftChevron} onClick={this.leftClickHandler}>
                    <LeftChevron/>
                </div>
                <div className={classes.Options}>
                    <div className={classes.AvailableOptions}>
                        <div className={classes.Window}>
                            {options}
                        </div>
                    </div>
                    <div className={classes.CustomOption}>
                        <div onClick={this.modalOpenedHandler}>
                            <AddCircle/>
                        </div>
                    </div>
                </div>
                <div className={classes.RightChevron} onClick={this.rightClickHandler}>
                    <RightChevron/>
                </div>
            </div>
            <Modal show={this.state.modalOpen} modalClosed={this.modalClosedHandler}>
                {this.props.modal}
            </Modal>
            </>
        );
    }
}

export default OptionsCarousel;