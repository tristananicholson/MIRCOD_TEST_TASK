import React from 'react';

const leftChevron = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="10px" height="19px">
            <path fillRule="evenodd"  fill="rgb(26, 27, 28)"
            d="M9.693,1.525 C9.869,1.305 9.957,1.085 9.957,0.953 C9.957,0.469 9.649,0.161 9.165,0.161 C8.989,0.161 8.813,0.249 8.681,0.381 L0.496,8.258 C-0.032,8.786 -0.164,9.358 0.408,9.886 L8.593,17.807 C8.769,17.983 8.945,18.071 9.165,18.071 C9.649,18.071 9.957,17.719 9.957,17.323 C9.957,17.103 9.869,16.927 9.649,16.707 L1.684,9.138 L9.693,1.525 Z"/>
        </svg>
    );
}

export default leftChevron;