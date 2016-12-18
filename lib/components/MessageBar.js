import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick } from 'lodash';

export default class MessageBar extends React.Component {
  constructor() {
    super();
    this.state = {
      length: 0,
    }
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="logged-in">
          {user ? <p>Logged in as {user.displayName} ({user.email})<button onClick={() => firebase.auth().signOut()}>Sign Out</button></p>
            : <button onClick={() => signIn()}>Sign In</button> }
        </div>
        <div className="type-here">
          <input type="text"
            placeholder="Message"
            value={this.props.draftMessage}
            onChange={ (e) => this.props.handleChange(e)}
            onKeyUp={ () => this.charCount() }
          />
          <span>{this.state.length}</span>
          <button className="submit" disabled={this.state.length > 140} onClick={ () => this.props.addNewMessage() }>
            Submit</button>
          <button className="clear" onClick={ () => this.props.clearField() }>
            Clear</button>
        </div>
    </div>
    )
  }

  charCount() {
    const length = this.props.draftMessage.length;
    const max = 140;
    this.setState({ length: length });
  }

}
