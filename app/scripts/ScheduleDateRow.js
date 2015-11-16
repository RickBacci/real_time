import React from 'react';
import AddTimeSlotButton    from './AddTimeSlotButton.js';

export default React.createClass({ render: function() {
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
