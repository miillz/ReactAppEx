
import React, { Component } from 'react';

import PropTypes from 'prop-types';

/*
//Oriented-Object Syntax

class MessageView extends Component {

  render() {
    return(
      <div className="container">
        <div className="from">
          <span className="label">From: </span>
          <span className="value">John Doe</span>
        </div>
        <div className="status">
          <span className="label">Status: </span>
          <span className="value"> Unread</span>
        </div>
        <div className="message">
          <span className="label">Message: </span>
          <span className="value">Have a great day!</span>
        </div>
      </div>
    )
  }
}*/

/*
//Function syntax
export default function MessageView({message}) {
  return (
    <div className="container">
      <div className="from">
        <span className="label">From: </span>
        <span className="value">{message.from}</span>
      </div>
      <div className="status">
        <span className="label">Status: </span>
        <span className="value">{message.status}</span>
      </div>
      <div className="message">
        <span className="label">Message: </span>
        <span className="value">{message.content}</span>
      </div>
    </div>
  );
}

MessageView.propTypes = {
  message: PropTypes.object.isRequired
}
*/
class MessageView extends Component {
  render() {

    const message = this.props.message;

    return(
      <div className="container">
        <div className="from">
          <span className="label">From: </span>
          <span className="value">{message.from}</span>
        </div>
        <div className="status">
          <span className="label">Status: </span>
          <span className="value">{message.status}</span>
        </div>
        <div className="message">
          <span className="label">Message: </span>
          <span className="value">{message.content}</span>
        </div>
      </div>
    )
  }


}

export default MessageView;
