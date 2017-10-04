import React, { Component } from 'react';
import Message from './Message.jsx';
import Notification from './Notification.jsx';
import PropTypes from 'proptypes';

class MessageList extends Component {
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object)
  }
  render() {
    const messageItems = this.props.messages.map(message => {
      if(message.type === 'message') return <Message username={message.username} content={message.content} key={message.id} />;
      return <Notification content={message.content} key={message.id} />;
    });
    return (
      <main className="messages">
        {messageItems}
      </main>
    );
  }
}
export default MessageList;

