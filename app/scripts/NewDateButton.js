import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return { displayForm: false }
  },

  handleClick: function() {
    event.preventDefault();
    // var date = React.findDOMNode(this.refs.date).value.trim();
    // console.log('in handle click for NewDateButton')
    // console.log(date)
    // this.props.onDateButtonClick('fake date');

    // render a form on the page ---> toggle
    // let state = this.state.displayForm;
    this.setState({ displayForm: true });
  },
  submitDate: function() {
    this.setState({ displayForm: false })
    let date = this.refs.date.value;

    console.log(date);
    this.props.onDateButtonClick(date);
  },
  
  render: function() {
    let baseClass = 'input'

    return(
      <div>
        <button onClick={this.handleClick}
          className='bottom full-width btn btn-primary btn-large'>
          Add Date
        </button>

        <div>
          <input ref='date' placeholder='Enter a date' />
          <button onClick={this.submitDate}>Submit</button>
        </div>
      </div>
    )
  }

});
