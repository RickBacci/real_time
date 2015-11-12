import '../styles/base.css';
import React from 'react/addons';

let root_url = "http://localhost:8080/webpack-dev-server/"

let Landing = React.createClass({
  getInitialState: function () {
    return { timeSlots: [], scheduleUrl: '', appointmentsUrl: '' }
  },
  handleScheduleButtonClick: function() {
    this.setState({ scheduleUrl: "Scheduling Url: " + root_url + "/schedule/175" });
    this.setState({ appointmentsUrl: "Appointments Url: " + root_url + "/appointments/175" });
  },
  render: function() {
    return(
      <div className='text-center'>
        <h1>{ this.props.name }!</h1>
        <NewScheduleButton onButtonClick={this.handleScheduleButtonClick} />
        <h5>{ this.state.scheduleUrl }</h5>
        <h5>{ this.state.appointmentsUrl }</h5>
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
