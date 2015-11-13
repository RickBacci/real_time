import '../styles/base.css';
import React from 'react/addons';

// - ScheduleTable
//   - NewScheduleButton
//   - UrlTable
//     - SchedulerUrl
//     - ScheduleeUrl
//   - NewDateButton
//   - ScheduleDateTable
//     - ScheduleDateRow
//     - ScheduleTimeSlotRow
//       - startTime
//       - endTime
//       - AddTimeSlotButton
//   -GenerateICalButton

let ScheduleTable = React.createClass({
  render: function() {
    return(
      <div>
        <NewScheduleButton />
        <UrlTable urls={ this.props.urls }/>
        <NewDateButton />
        <ScheduleDateTable timeSlots={ this.props.timeSlots }/>
        <GenerateICalButton />
      </div>
    )
  }

});

let NewScheduleButton = React.createClass({
  render: function() {
    return(
      <div>
        <button className='btn btn-primary btn-large'>
          Create New Schedule
        </button>
      </div>
    )
  }

});

let UrlTable = React.createClass({
  render: function() {
    return(
      <div>
        <SchedulerUrl />
        <ScheduleeUrl />
      </div>
    )
  }

});

let SchedulerUrl = React.createClass({
  render: function() {
    return(
      <div>
        <tr><th colSpan="3">{this.props.schedulerUrl}</th></tr>
      </div>
    )
  }

});


let ScheduleeUrl = React.createClass({
  render: function() {
    return(
      <div>
        <tr><th colSpan="3">{this.props.scheduleeUrl}</th></tr>
      </div>
    )
  }

});

let NewDateButton = React.createClass({
  render: function() {
    return(
      <div>
        <button className='btn btn-primary btn-xs'>
          Add Date
        </button>
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
          rows.push(<ScheduleDateRow scheduleDate={ timeslot.scheduleDate } key={ randKey } />);
        }

        let randKey = Math.floor(Math.random() * (max - min + 1)) + min;

        rows.push(
          <ScheduleTimeSlotRow startTime={ timeslot.startTime } endTime={ timeslot.endTime } scheduled={ timeslot.scheduled } key={ randKey - 1 } />
        );

        lastDate = timeslot.scheduleDate;

    });
    return (
      <table>
          <thead>
              <tr>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
              </tr>
          </thead>
          <tbody>{rows}</tbody>
      </table>
    )
  }

});

let ScheduleDateRow = React.createClass({
  render: function() {
    return(
      <div>
        <tr><th colSpan="3">{this.props.scheduleDate}</th></tr>
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
        <DeleteTimeSlotButton />
    return(
      <div>
        <tr>
          <td>{this.props.startTime}</td>
          <td>{this.props.endTime}</td>
          <td>{scheduled}</td>
          <td>
            <AddTimeSlotButton />
          </td>
        </tr>
      </div>
    )
  }

});


let DeleteTimeSlotButton = React.createClass({
  render: function() {
    return(
      <div>
        <button className='btn btn-primary btn-large'>
          Remove Time Slot
        </button>
      </div>
    )
  }

});

let AddTimeSlotButton = React.createClass({
  render: function() {
    return(
      <div>
        <button className='btn btn-primary btn-large'>
          Add Time Slot
        </button>
      </div>
    )
  }

});

let GenerateICalButton = React.createClass({
  render: function() {
    return(
      <div>
        <button className='btn btn-primary btn-large'>
          Generate iCal file
        </button>
      </div>
    )
  }

});


let APPNAME = 'Real Time';

let URLS = [
  {rootUrl: 'http://localhost:8080/webpack-dev-server'},
  {SchedulerUrl: '/scheduler/175'},
  {ScheduleeUrl: '/schedulee/175'},
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

