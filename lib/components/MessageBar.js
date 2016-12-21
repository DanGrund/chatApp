import React from 'react';
import moment from 'moment';
import firebase, { reference, signIn } from '../firebase';
import { pick } from 'lodash';

export default class MessageBar extends React.Component {
  constructor() {
    super();
    this.state = {
      length: 0,
      draftMessage: '',
    };
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="logged-in">
          {user ? <p>Logged in as {user.displayName} ({user.email})<button id="signout"
            onClick={() => firebase.auth().signOut()}>Sign Out</button></p>
            : <button id="signin" onClick={() => signIn()}>Sign In</button> }
        </div>
        <div className="type-here">
          <input type="text"
            placeholder="Message"
            value={this.state.draftMessage}
            onChange={(e) => this.handleChange(e)}
            onKeyUp={ () => this.charCount() }
          />
          <span id="count">{this.state.length}</span>
          <button className="submit"
            disabled={this.state.length > 140}
            onClick={ () => { this.addNewMessage(); this.setState({ length: 0 }); }}>
            Submit</button>
          <button className="clear" onClick={ () => this.clearField() }>
            Clear</button>
        </div>
    </div>
    );
  }

  charCount() {
    const length = this.state.draftMessage.length;
    this.setState({ length: length });
  }

  addNewMessage() {
    const now = moment().format('MMMM Do, h:mma');
    const { user, draftMessage } = this.props;
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: this.state.draftMessage,
      createdAt: now,
    });
    this.clearField();
  }

  handleChange(e) { this.setState({ draftMessage: e.target.value }); }

  clearField() { this.setState({ draftMessage: '' }); }
}
