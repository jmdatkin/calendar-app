import React from 'react';
import './CalDay.css';

function CalDay(props) {

    return (
        <div className="CalDay">
            <span className="DateNumber">
                {props.day.getDay()}
            </span>
            {props.day.format()}
        </div>
    );
}

export default CalDay;