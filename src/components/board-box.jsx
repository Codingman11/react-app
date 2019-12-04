import React from 'react';


function Box(props) {

    
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Box;

