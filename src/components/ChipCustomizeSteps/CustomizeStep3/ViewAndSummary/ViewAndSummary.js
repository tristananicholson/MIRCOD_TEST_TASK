import React, { Component } from 'react';
import classes from './ViewAndSummary.module.scss';
import PrimaryButton from '../../../UI/Buttons/PrimaryButton/PrimaryButton';
import Modal from '../../../UI/Modal/Modal';

class ViewAndSummary extends Component {

    state = {
        modalOpen: false
    };

    modalOpenedHandler = () => {
        this.setState({modalOpen: true});
    }

    modalClosedHandler = () => {
        this.setState({modalOpen: false});
    }

    render(){
        let orderModal = (
            <div className={classes.OrderModal}>
                <div className={classes.Title}><div>ORDER NOW</div></div>
                <div className={classes.Fields}>
                    <div className={classes.Field}>NAME</div>
                    <div className={classes.Input}><input/></div>
                </div>
                <div className={classes.Button}>
                    <PrimaryButton name={"ORDER"} click={()=>{}}/>
                </div>
            </div>
        );

        return (
            <>
            <section className={classes.ViewAndSummary}>
                <div className={classes.Heading}>
                    <div>
                        <h3>WHITE LABEL<br/>W-394900 XP</h3>
                    </div>
                    
                    <PrimaryButton 
                        primary
                        name={"ORDER NOW"}
                        click={this.modalOpenedHandler}></PrimaryButton>
                </div>
                <div className={classes.Details}>
                    <p className={classes.Bold}>
                        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra per *
                    </p>
                    <br/>
                    <p>
                        ncpetos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiem pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut.
                    </p>
                </div>

            </section> 
            <Modal show={this.state.modalOpen} modalClosed={this.modalClosedHandler}>
                {orderModal}
            </Modal>
            </>
        );
    }
}

export default ViewAndSummary;