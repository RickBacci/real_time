import React from 'react';
import DeleteTimeSlotButton from './DeleteTimeSlotButton.js';

export default React.createClass({
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
