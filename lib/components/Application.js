import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Title from './Title';
import ChatWindow from './ChatWindow';
import MessageBar from './MessageBar';
import moment from 'moment';

export default class Application extends Component {

  constructor() {
    super();
    this.state = {
      messages: [],
      draftMessage: '',
      user: null,
    };
  }

  componentDidMount() {
    reference.limitToLast(5).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
    this.createUserArray();
  }

  render() {
    const { user, messages, draftMessage } = this.state;
    return (
      <div className="Application">
        <Title
          reversing={this.reversing.bind(this)}
        />
        <ChatWindow messages={messages}/>
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

  addNewMessage() {
    const now = moment().format("MMMM Do, h:mma");
    const { user, draftMessage } = this.state;
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      content: draftMessage,
      createdAt: now,
    });
    this.clearField();
  }

  handleChange(e) {this.setState({ draftMessage: e.target.value })};

  clearField() {this.setState({ draftMessage: '' })}

  reversing() {
    const messageArray = this.state.messages;
    messageArray.reverse();
    this.setState({messages: messageArray})
  }

  createUserArray(object) {
    const firebaseKeys = object ? Object.users(object) : [];
    return firebaseKeys.map((user) => {
      const singleMessage = object[user];
      singleMessage['firebaseUser'] = user;
      debugger;
      console.log(singleMessage);
    });
  }
}
