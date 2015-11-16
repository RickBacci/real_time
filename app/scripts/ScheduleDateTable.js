import React from 'react';
import ScheduleDateRow      from './ScheduleDateRow.js';
import ScheduleTimeSlotRow  from './ScheduleTimeslotRow.js';


export default React.createClass({
  render: function() {
    let rows = [];
    let lastDate = null;

    let min = 100000;
    let max = 999999;

    this.props.timeSlots.forEach(function(timeslot) {

      if (timeslot.scheduleDate !== lastDate) {

        let randKey = Math.floor(Math.random() * (max - min + 1)) + min;

        rows.push(
          <div className='date-row' key={ randKey }>
            <ScheduleDateRow
              scheduleDate={ timeslot.scheduleDate }
            />
          </div>
        );
      }

      let randKey = Math.floor(Math.random() * (max - min + 1)) + min;

      rows.push(
        <ScheduleTimeSlotRow
          startTime = { timeslot.startTime }
          endTime   = { timeslot.endTime }
          scheduled = { timeslot.scheduled }
          key       = { randKey - 1 }
        />
      );

      lastDate = timeslot.scheduleDate;

    }.bind(this));
    return (
      <table className='table'>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }

});
