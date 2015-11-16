import React from 'react';

import NewScheduleButton    from './NewScheduleButton.js';
import UrlTable             from './UrlTable.js';
import NewDateButton        from './NewDateButton.js';
import ScheduleDateTable    from './ScheduleDateTable.js';
import GenerateICalButton   from './GenerateICalButton.js';

export default React.createClass({
  handleDateButtonClick: function(event) {
    console.log('Schedule table in handleDateuButtonClick')

    // this.setState({ dateButtonWasClicked:  true });
  },
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

                  <NewDateButton onDateButtonClick={ this.handleDateButtonClick } />
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
