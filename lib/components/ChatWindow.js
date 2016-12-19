import React from 'react';
import Chat from './chat';
import Users from './users';

export default class ChatWindow extends React.Component {

  render () {
    return (
      <div className = "main-window">
        <Chat messages={this.props.messages} />
        <Users />
      </div>
    )
  }
}
