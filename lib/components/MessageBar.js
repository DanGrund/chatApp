import React from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick } from 'lodash';

export default class MessageBar extends React.Component {

  // submitMessage() {
  //   const { draftMessage } = this.state;
  //   reference.push({
  //     user: pick(user, 'displayName', 'email', 'uid'),
  //     content: draftMessage,
  //     createdAt: Date.now(),
  //   });
  //   this.setState({ draftMessage: '' });
  // }

  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="logged-in">
          {user ? <p>Logged in as {user.displayName} ({user.email})</p> : <button onClick={() => signIn()}>Sign In</button> }
      </div>
        <div className="type-here">
          <input type="text"
            placeholder="Message"
            value={this.props.draftMessage}
            onChange={ (e) => this.props.handleChange(e)}
          />
        </div>
        <button className="submit" onClick={ () => this.props.addNewMessage() }>
          Submit</button>
        <button className="clear" onClick={ () => this.props.clearField() }>
          Clear</button>
    </div>
    )
  }
}
