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
        <div className='row'>
          <div className='col-md-12'>
            <div className='schedule-table panel panel-default'>
              <div className='schedule-button'>
                <div>
                  <NewScheduleButton />
                </div>
              </div>
              <div className='panel-body'>
                <div className='well'>
                  <ScheduleDateTable timeSlots={ this.props.timeSlots }/>
                </div>
                <GenerateICalButton />
              </div>

            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <UrlTable urls={ this.props.urls }/>
          </div>
        </div>
      </div>
    )
  }

});

let NewScheduleButton = React.createClass({
  render: function() {
    return(
      <div className='.schedule-button'>
        <button className='center btn btn-primary btn-large'>
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
        { this.props.schedulerUrl }
      </div>
    )
  }

});


let ScheduleeUrl = React.createClass({
  render: function() {
    return(
      <div>
        { this.props.scheduleeUrl }
      </div>
    )
  }

});

let NewDateButton = React.createClass({
  render: function() {
    return(
      <div>
        <button className='btn btn-primary btn-large'>
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

          rows.push(
            <div className='date-row'>
              <ScheduleDateRow scheduleDate={ timeslot.scheduleDate } key={ randKey } />
            </div>
          );
        }

        let randKey = Math.floor(Math.random() * (max - min + 1)) + min;

        rows.push(
          <ScheduleTimeSlotRow startTime={ timeslot.startTime } endTime={ timeslot.endTime } scheduled={ timeslot.scheduled } key={ randKey - 1 } />
        );

        lastDate = timeslot.scheduleDate;

    });
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

let DeleteTimeSlotButton = React.createClass({
  render: function() {
    return(
      <div>
        <span>
          <a href=''>Remove</a>
        </span>
      </div>
    )
  }

});

let AddTimeSlotButton = React.createClass({
  render: function() {
    return(
      <div>
          <a className='white' href="">Add Time Slot</a>
      </div>
    )
  }

});

let GenerateICalButton = React.createClass({
  render: function() {
    return(
      <div>
        <button className='center btn btn-primary btn-large'>
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

