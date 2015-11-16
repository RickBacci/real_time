import React from 'react';

export default React.createClass({
  handleClick: function() {
    console.log('generate iCal file. implement me!');
  },
  
  render: function() {
    return(
      <div>
        <button className='full-width btn btn-primary btn-large'
                onClick={this.handleClick}>
          Generate iCal file
        </button>
      </div>
    )
  }

});
