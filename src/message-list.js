import React, { Component } from 'react';
import MessageView from './messages';

/*class MessageList extends Component {

  state = {
    message: {
        from: 'Marie',
        content: 'I will be traveling soon',
        status: 'read'
      }
  }
  render() {
    return(
      <div>
        <h1>List of Messages</h1>
        <MessageView message={this.state.message} />
      </div>
      )
    }
  }

}

  */

  class MessageList extends Component {

  state = {
    messages:  [
      {
        from: 'John',
        message: 'l\'evenement aura lieu la semaine prochaine',
        status: 'non lue'
      },
      {
        from: 'Marie',
        message: 'Je voyagerais bientot',
        status: 'lue'
      },
      {
        from: 'Tessa',
        message: 'Bonne journée!',
        status: 'lue'
      }
    ]
  }

  render() {
    const messageViews = this.state.messages.map(function(message, index) {
      return(
        <MessageView key={index} message={message} />
      )
    })
    return(
      <div>
        <h1>List of Messages</h1>
        {messageViews}
      </div>
    )
  }
}




export default MessageList;
