import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import Title from './Title';
import ChatWindow from './ChatWindow';
import MessageBar from './MessageBar';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      filteredMessages: [],
      draftMessage: '',
      user: null,
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

  render() {
    const { user, messages, draftMessage } = this.state;
    return (
      <div className="Application">
        <Title reversing={this.reversing.bind(this)} />
        <ChatWindow
          messages={messages}
          searchUserArray={this.searchUserArray.bind(this)} />
        <MessageBar user={user} />
      </div>
    )
  }

  reversing() {
    const messageArray = this.state.messages;
    messageArray.reverse();
    this.setState({messages: messageArray})
  }

  searchUserArray(ID) {
    const userID = ID
    const userMessageArray = this.state.messages.filter((message) => {
      return (message.user.uid === userID);
    })
    this.setState({messages: userMessageArray});
  }

}
