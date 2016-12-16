import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Title from './Title';
import Chat from './Chat';
import MessageBar from './MessageBar';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null
    };
  }

  componentDidMount() {
    reference.limitToLast(12).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage() {
    const { user, draftMessage } = this.state;
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: Date.now()
    });
    this.setState({ draftMessage: '' });
  }

  handleChange(e) {this.setState({ draftMessage: e.target.value })};

  clearField() {
    this.setState({ draftMessage: '' })
  }

  render() {
    const { user, messages, draftMessage } = this.state;
    return (
      <div className="Application">
        <Title />
        <Chat />
        <ul>
          { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
        </ul>
        <MessageBar
          draftMessage={draftMessage}
          user={user}
          addNewMessage={this.addNewMessage.bind(this)}
          handleChange = {this.handleChange.bind(this)}
          clearField={this.clearField.bind(this)}
        />
      </div>
    )
  }
}
