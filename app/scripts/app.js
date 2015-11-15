import '../styles/base.css';

import React from 'react';

import GenerateICalButton   from './GenerateICalButton.js';
import AddTimeSlotButton    from './AddTimeSlotButton.js';
import NewScheduleButton    from './NewScheduleButton.js';
import DeleteTimeSlotButton from './DeleteTimeSlotButton.js';
import NewDateButton        from './NewDateButton.js';
import UrlTable             from './UrlTable.js';

let ScheduleTable = React.createClass({
  componentDidMount: function() {
    // init socket
    // send messages
  },
  render: function() {
    return(
      <div>
        <div className='row'>
          <div className='col-md-12'>
            <div className='schedule-table panel panel-default'>
              <div className='schedule-button'>
                <NewScheduleButton />
              </div>
              <div className='panel-body'>
                <div className='well'>
                  <UrlTable urls={ this.props.urls }/>
                </div>
                <div className='well'>
                  <NewDateButton />
                  <div>
                    <ScheduleDateTable
                      timeSlots={ this.props.timeSlots }

                    />
                  </div>
                </div>
                <GenerateICalButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

});



let ScheduleDateTable = React.createClass({
  render: function() {
    let rows = [];
    let lastDate = null;

    let min = 100000;
    let max = 999999;

    this.props.timeSlots.forEach(function(timeslot) {

      if (timeslot.scheduleDate !== lastDate) {

        let randKey = Math.floor(Math.random() * (max - min + 1)) + min;

        rows.push(
          <div className='date-row'>
            <ScheduleDateRow
              scheduleDate={ timeslot.scheduleDate }
              key={ randKey }
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

let ScheduleDateRow = React.createClass({
  render: function() {
    return(
      <div>
        <tr className='date-row'>
          <td colSpan='2' className='text-left white'>
            { this.props.scheduleDate }
          </td>
          <td className='date-row text-right white'>
            <AddTimeSlotButton />
          </td>
        </tr>
      </div>
    )
  }

});

let ScheduleTimeSlotRow = React.createClass({
  render: function() {
    var scheduled = this.props.scheduled ?
      <span style={{color: 'red'}}>
        Scheduled
      </span> :
      <span>
        <DeleteTimeSlotButton />
      </span>
    return(
      <div>
        <tr>
          <td colSpan='2' className=''>
            <div className='timeslot-left'>
              <span>
                {this.props.startTime}
              </span>
              <span> - </span>
              <span>
                {this.props.endTime}
              </span>
            </div>
          </td>
          <td>
          <span className='pull-right timeslot-right'>
            {scheduled}
          </span>
          </td>
        </tr>
      </div>
    )
  }

});



let APPNAME = 'Real Time';

let URLS = [
  {
    rootUrl: 'http://localhost:8080/webpack-dev-server',
    schedulerUrl: '/scheduler/175',
    scheduleeUrl: '/schedulee/175'
  },
];

let TIMESLOTS = [
  {scheduleDate: '11/12/15', startTime: '1pm', endTime: '2pm', scheduled: true},
  {scheduleDate: '11/12/15', startTime: '2pm', endTime: '3pm', scheduled: false},
  {scheduleDate: '11/13/15', startTime: '2pm', endTime: '3pm', scheduled: true},
  {scheduleDate: '11/14/15', startTime: '3pm', endTime: '4pm', scheduled: false},
  {scheduleDate: '11/14/15', startTime: '4pm', endTime: '5pm', scheduled: true},
  {scheduleDate: '11/14/15', startTime: '5pm', endTime: '6pm', scheduled: false},
  {scheduleDate: '11/15/15', startTime: '4pm', endTime: '5pm', scheduled: false},
  {scheduleDate: '11/16/15', startTime: '5pm', endTime: '6pm', scheduled: false},
  {scheduleDate: '11/17/15', startTime: '1pm', endTime: '2pm', scheduled: false},
  {scheduleDate: '11/17/15', startTime: '6pm', endTime: '7pm', scheduled: false},
  {scheduleDate: '11/18/15', startTime: '7pm', endTime: '8pm', scheduled: true},
];


React.render(
  <ScheduleTable name={ APPNAME } timeSlots={ TIMESLOTS } urls={ URLS }/>,
    document.getElementById('content')
);
