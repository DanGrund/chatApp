import React from 'react';

export default class Chat extends React.Component {

  renderMessages() {
    let messageField;
    if (this.props.filteredMessages.length) {
      messageField = (
        <ul id = "chat">
        { this.props.filteredMessages.map(m => <li key={m.key}>
        <span id="date"> {m.createdAt} </span>
        <span id="userId">{m.user.displayName}</span>:
        <p id="text">{m.content}</p></li>) }
      </ul>);
    } else {
      messageField = (
      <ul id = "chat">
        { this.props.messages.map(m => <li key={m.key}>
        <span id="date"> {m.createdAt} </span>
        <span id="userId">{m.user.displayName}</span>:
        <p id="text">{m.content}</p></li>) }
      </ul>);
    }
    return messageField;
  }

  render() {
    return (
      <div>
        {this.renderMessages()}
      </div>
    );
  }
}
