import React from 'react';


export default React.createClass({
  render: function() {
    let rootUrl      = this.props.urls.rootUrl;
    let schedulerUrl = rootUrl + this.props.urls[1];
    let scheduleeUrl = rootUrl + this.props.urls[2];

    return(

      <div>
        <div>
          { schedulerUrl }
        </div>
        <div>
          { scheduleeUrl }
        </div>
      </div>
    )
  }

});
