import React from 'react';
import CalView from './CalView.js';
// import Day from '../util/Day.js';
import CalData from '../util/CalData.js';

import './Calendar.css';

function Calendar(props) {
    
    var days = [];
    console.log(CalData.weeks);
    for (var i=0; i<CalData.weeks.length; i++) {
        for (var j=0; j<CalData.weeks[i].days.length; j++)
            days.push(CalData.weeks[i].days[j]);
    }
        console.log(days);

    return (
        <div className="Calendar">
            <CalView days={days} />
        </div>
    )
}

export default Calendar;