import React from 'react';
import Chat from './Chat';
import Users from './users';

export default class ChatWindow extends React.Component {

  render() {
    return (
      <div className = "main-window">
        <Chat
          messages={this.props.messages}
          filteredMessages={this.props.filteredMessages}
        />
        <Users
          messages={this.props.messages}
          filterByUser={this.props.filterByUser}
          clearFilterArray={this.props.clearFilterArray}/>
      </div>
    );
  }
}
