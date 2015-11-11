import '../styles/base.css';
import React from 'react/addons';

let Landing = React.createClass({
  getInitialState: function () {
    return { timeSlots: [], scheduleUrl: '', appointmentsUrl: '' }
  },
  handleScheduleButtonClick: function() {
    this.setState({ timeSlots: ["Rick Bacci"] });
  },
  render: function() {
    return(
      <div>
        <h1>{ this.props.name }!</h1>
        <h3>Scheduling Url:{ this.state.timeSlots }</h3>
        <h3>Appointments Url:{ this.state.timeSlots }</h3>
        <NewScheduleButton onButtonClick={this.handleScheduleButtonClick} />
      </div>
    )
  }
});


let NewScheduleButton = React.createClass({
  handleClick: function() {
    this.props.onButtonClick();
  },
  render: function() {
    return(
      <button className='btn btn-primary btn-large' onClick={ this.handleClick } >
        Create New Schedule
      </button>
    )
  }
});


React.render(<Landing name='Real Time' />, document.getElementById('content'));
