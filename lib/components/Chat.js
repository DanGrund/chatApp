import React from 'react';

export default class Chat extends React.Component {

  render () {
    return (
      <div>
        <ul id = "chat">
          { this.props.messages.map(m => <li key={m.key}>{m.createdAt} {m.user.displayName}: {m.content}</li>) }
        </ul>
      </div>
    )
  }
}
