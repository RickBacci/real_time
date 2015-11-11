import '../styles/base.css';
import React from 'react/addons';

let Name = React.createClass({
  render() {
    return(
      <h1>{this.props.name}!</h1>
    )
  }
});

React.render(<Name name='Real Time' />, document.body);
