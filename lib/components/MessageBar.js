import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick } from 'lodash';

export default class MessageBar extends React.Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      length: 0,
    };
  }

  // submitMessage() {
  //   const { draftMessage } = this.state;
  //   reference.push({
  //     user: pick(user, 'displayName', 'email', 'uid'),
  //     content: draftMessage,
  //     createdAt: Date.now(),
  //   });
  //   this.setState({ draftMessage: '' });
  // }

  eraseMessage() {
    ;
  }

  render() {
    const user = this.state;
    return (
      <div>
        <div className="logged-in">
          {user ? <p>Logged in as {user.displayName} ({user.email})</p> : <button onClick={() => signIn()}>Sign In</button> }
      </div>
        <div className="type-here">
          <input type="text"
            placeholder="Message"
            onChange={ (e) => this.setState({ draftMessage: e.target.value, length: e.target.value.length})}
          />
        </div>
        <div>{this.state.length}</div>
        <button className="submit" onClick={ () => addNewMessage() }>
          Submit</button>
        <button className="clear" onClick={ () => this.setState({ draftMessage: '' }) }>
          Clear</button>
    </div>
    )
  }
}
