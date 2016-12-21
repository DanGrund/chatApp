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

  reversing() {
    const messageArray = this.state.messages;
    messageArray.reverse();
    this.setState({ messages: messageArray });
  }

  filterByUser(ID) {
    const userID = ID
    const userMessageArray = this.state.messages.filter((message) => {
      return (message.user.uid === userID);
    })
    this.setState({filteredMessages: userMessageArray});
  }

  searchMessages(e) {
    const searchString = e;
    const searchResults = this.state.messages.filter((message) => {
      return (message.content.toLowerCase().includes(searchString))
    })
    this.setState({ filteredMessages: searchResults });
  }

  clearFilterArray() {
    this.setState({filteredMessages: []});
  }

  render() {
    const { user, messages, filteredMessages } = this.state;
    return (
      <div className="Application">
        <Title
          reversing={this.reversing.bind(this)}
          searchMessages={this.searchMessages.bind(this)}/>
        <ChatWindow
          messages={messages}
          filteredMessages={filteredMessages}
          filterByUser={this.filterByUser.bind(this)}
          clearFilterArray={this.clearFilterArray.bind(this)}/>
        <MessageBar user={user} />
      </div>
    )
  }

}
