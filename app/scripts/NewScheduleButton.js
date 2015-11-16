import React from 'react';

export default React.createClass({
  handleClick: function() {
    console.log("Create new schedule. Implement me!");
  },

  render: function() {
    return(
      <div className='.schedule-button'>
        <button className='full-width btn btn-primary btn-large'
                onClick={this.handleClick} >
          Create New Schedule
        </button>
      </div>
    )
  }
});
