import React from 'react';

export default class Chat extends React.Component {

  render () {
    return (
      <div>
        <ul>
          { this.props.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
        </ul>
      </div>
    )
  }
}
