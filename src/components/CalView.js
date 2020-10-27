import React from 'react';
import './CalView.css';
import CalDay from './CalDay.js';

function CalView(props) {

    return (
        <div className="CalView">
            {props.days.map((val,idx) => {
                return <CalDay key={idx} day={val}></CalDay>
            })}
        </div>
    )
}

export default CalView;