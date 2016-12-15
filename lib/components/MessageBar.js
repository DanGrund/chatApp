import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';

export default class MessageBar extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
    }
  }

  submitMessage() {
    const { user, draftMessage } = this.state;
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now(),
    })
    this.setState({ draftMessage: '' });
  }

  eraseMessage() {
    this.setState({ draftMessage: '' });
  }

  render() {
    let user = this.state;
    return(
      <div>
        <div className="logged-in">Logged in as {user.displayName}</div>
        <div className="type-here">
          <input type="text"
            placeholder="Message"
            onChange={ (e) => this.setState({ draftMessage: e.target.value })}
          />
        </div>
        <button className="submit" onClick={ () => this.submitMessage() }>
          Submit</button>
        <button className="clear" onClick={ () => this.eraseMessage() }>
          Clear</button>
    </div>
    )
  }
}
