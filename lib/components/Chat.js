import React from 'react';

export default class Chat extends React.Component {

  render () {
    return (
      <div className = "main-window">
        <ul id = "chat">
          { this.props.messages.map(m => <li key={m.key}>{m.createdAt} {m.user.displayName}: <p id="text">{m.content}</p></li>) }
        </ul>
        <ul id = "users">
          <li>User 1</li>
          <li>User 2</li>
          <li>User 3</li>
        </ul>
      </div>
    )
  }
}
