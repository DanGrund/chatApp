import React from 'react';

export default class Chat extends React.Component {
  render() {
    return (
      <div>
        <ul id = "chat">

          { this.props.messages.map(m => <li key={m.key}>
          <span id="date">{m.createdAt}   </span>
          <span id="userId">{m.user.displayName}</span>:
          <p id="text">{m.content}</p></li>) }
          
        </ul>
      </div>
    )
  }
}
