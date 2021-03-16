import * as actionTypes from '../actions/actionTypes';

import Temp1 from '../../assets/icons/temp1';
import Temp2 from '../../assets/icons/temp2';
import Temp3 from '../../assets/icons/temp3';
import LogoMBus from '../../assets/images/logo_XBee.png';
import LogoZWare from '../../assets/images/logo_ZWare.png';
import LogoWiFi from '../../assets/images/logo_WiFi.png';
import LogoXBee from '../../assets/images/logo_XBee.png';

const initialState = {
    options: [
        {name: "Temperature", icon: <Temp1/>, selected: false},
        {name: "Winter Temperature", icon: <Temp2/>, selected: false},
        {name: "Cloud Temperature", icon: <Temp3/>, selected: false},
        {name: "Dust Temperature", icon: <Temp1/>, selected: false},
        {name: "Summer Temperature", icon: <Temp2/>, selected: false},
        {name: "Water Temperature", icon: <Temp3/>, selected: false},
        {name: "Atmospheric Temperature", icon: <Temp1/>, selected: false},
        {name: "Subterranean Temperature", icon: <Temp3/>, selected: false},
        {name: "Body Temperature", icon: <Temp1/>, selected: false},
        {name: "Core Temperature", icon: <Temp2/>, selected: false},
        {name: "Extreme Temperature", icon: <Temp3/>, selected: false}],
    optionsSelected: 0,
    connectionSelected: false,
    distance: 25,
    connections: [
        {name: "XBee 1", image: LogoXBee, selected: false},
        {name: "ZWave 1", image: LogoZWare, selected: false},
        {name: "XBee 2", image: LogoXBee, selected: false},
        {name: "ZWave 2", image: LogoZWare, selected: false},
        {name: "WiFi 1", image: LogoWiFi, selected: false},
        {name: "MBus 1", image: LogoMBus, selected: false},
        {name: "WiFi 2", image: LogoWiFi, selected: false},
        {name: "MBus 2", image: LogoMBus, selected: false},
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.SELECT_OPTION):
            const options = [];
            let optionsSelected = state.optionsSelected;

            for(let i = 0; i < state.options.length; i++){
                options.push({...state.options[i]});
            }

            for(let i = 0; i < options.length; i++){
                if(options[i].name === action.payload.selected && !options[i].selected){
                    options[i].selected = true;
                    optionsSelected++;
                }else if(options[i].name === action.payload.selected && options[i].selected ){
                    options[i].selected = false;
                    optionsSelected--;
                }
            }

            return {
                ...state,
                options: options,
                optionsSelected: optionsSelected
            };
        case(actionTypes.SHIFT_OPTIONS_LEFT):
            let options1 = [];

            for(let i = 0; i < state.options.length; i++){
                options1.push({...state.options[i]});
            }

            options1 = [...options1.splice(1,options1.length), options1[0]];

            return {
                ...state,
                options: options1
            };
        case(actionTypes.SHIFT_OPTIONS_RIGHT):
            let options2 = [];

            for(let i = 0; i < state.options.length; i++){
                options2.push({...state.options[i]});
            }
            options2 = [options2[options2.length-1], ...options2.splice(0,options2.length-1)];
            

            return {
                ...state,
                options: options2
            };
        case(actionTypes.CHANGE_DISTANCE):
            return {
                ...state,
                distance: action.payload.distance
            };
        case(actionTypes.SELECT_CONNECTION):
            const connections = [];

            for(let connection of state.connections){
                connections.push({...connection});
            }

            for(let connection of connections){
                if(connection.name === action.payload.name){
                    connection.selected = true;
                }else{
                    connection.selected = false;
                }
            }

            return {
                ...state,
                connections: connections,
                connectionSelected: true
            };
        default:
            return state;
    }
};

export default reducer;